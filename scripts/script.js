// Função para configurar os botões do PayPal para cada vídeo
function setupPaypalButton(previewNumber, price, redirectUrl) {
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: price
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Transaction completed by ' + details.payer.name.given_name + '\nREDIRECTING YOU TO YOUR FOLDER...');
                // Redireciona para a URL após o pagamento
                window.location.href = redirectUrl;
            });
        }
    }).render(`#paypal-button-container-${previewNumber}`);
}

// Chamadas para configurar os botões do PayPal para cada vídeo
document.addEventListener('DOMContentLoaded', function () {
    // OMEGLE SKYPE, preço de $35 e link para o redirecionamento
    setupPaypalButton(1, '55.00', 'https://mega.nz/folder/F1pT1SCA#9tjWbTH7Zuza46DAsWVVmg');

    // Para o segundo vídeo, preço de $35 e link para o redirecionamento
    setupPaypalButton(2, '35.00', 'https://mega.nz/folder/N1h0FaaJ#lvkxrdeePJR3L9rHkrQYSQ');

    // Para o terceiro vídeo, preço de $35 e link para o redirecionamento
    setupPaypalButton(3, '35.00', 'https://mega.nz/folder/9oxh3aSR#IPv3b9K2uZpmYZ3KgX_HgA');

    // Para o quarto vídeo, preço de $45 e link para o redirecionamento
    setupPaypalButton(4, '45.00', 'https://mega.nz/folder/l8Y1USLA#yAMeMCDs5bNzgLH7B-JHvg');

    // Para o quinto vídeo, preço de $30 e link para o redirecionamento
    setupPaypalButton(5, '30.00', 'https://shre.ink/MEqZ');

    // Para o sexto vídeo, preço de $25 e link para o redirecionamento
    setupPaypalButton(6, '25.00', 'https://shre.ink/MEqA');

    // Para o sétimo vídeo, preço de $25 e link para o redirecionamento
    setupPaypalButton(7, '45.00', 'https://shre.ink/ME56');

    // Para o nono vídeo, preço de $25 e link para o redirecionamento
    setupPaypalButton(9, '25.00', 'https://mega.nz/folder/4FxQUb4I#hWH91cWf0olPXMVB9LwBLw');

    // Para o décimo vídeo, preço de $25 e link para o redirecionamento
    setupPaypalButton(10, '20.00', 'https://shre.ink/ME52');

    // Para o décimo vídeo, preço de $10 e link para o redirecionamento
    setupPaypalButton(10, '35.00', 'https://shre.ink/MELy');
});

