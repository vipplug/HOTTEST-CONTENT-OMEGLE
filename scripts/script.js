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
    setupPaypalButton(1, '55.00', 'https://www.dropbox.com/scl/fo/ureoah8ximjpad1a04jh4/AG0aXC0YwYEdHOUTWV1XwNY?rlkey=h6enzgsw7azmcudzqjdl0cul1&e=1&dl=0');

    // Para o segundo vídeo, preço de $35 e link para o redirecionamento
    setupPaypalButton(2, '35.00', 'https://mega.nz/folder/K5pkBbwB#IrQLmok6AtLzdWTpVDJxgQ');

    // Para o terceiro vídeo, preço de $35 e link para o redirecionamento
    setupPaypalButton(3, '35.00', 'https://mega.nz/folder/uQEjlSZb#dEx7JXogoeUWT5ap4SezDw/folder/3Q90iaKB');

    // Para o quarto vídeo, preço de $45 e link para o redirecionamento
    setupPaypalButton(4, '45.00', 'https://mega.nz/folder/uQEjlSZb#dEx7JXogoeUWT5ap4SezDw');

    // Para o quinto vídeo, preço de $30 e link para o redirecionamento
    setupPaypalButton(5, '30.00', 'https://mega.nz/folder/SjBiHZ5I#nyk27HZR_PB649wCB7uKMQ/folder/CngQ3bjC');

    // Para o sexto vídeo, preço de $25 e link para o redirecionamento
    setupPaypalButton(6, '25.00', 'https://mega.nz/folder/QBp0mQgJ#Ads3DWmYpFANMzSQlZlNXA');

    // Para o sétimo vídeo, preço de $25 e link para o redirecionamento
    setupPaypalButton(7, '45.00', 'https://mega.nz/folder/E0QyXTrC#dkFwRfgapkWT5OOtRSGQYA');

    // Para o nono vídeo, preço de $25 e link para o redirecionamento
    setupPaypalButton(8, '25.00', 'https://mega.nz/folder/4FxQUb4I#hWH91cWf0olPXMVB9LwBLw');

    // Para o décimo vídeo, preço de $25 e link para o redirecionamento
    setupPaypalButton(9, '20.00', 'https://mega.nz/folder/CgIAkKKK#2wegOq1VAhV1rs41elHx-w');

    // Para o décimo vídeo, preço de $10 e link para o redirecionamento
    setupPaypalButton(10, '35.00', 'https://mega.nz/folder/4oxRVD7b#yoWcK2OzdtmB0UCNaKp8nQ');
});

