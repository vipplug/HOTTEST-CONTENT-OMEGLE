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
    setupPaypalButton(1, '35.00', 'https://encurtador.com.br/5Bsq1');

    // Para o segundo vídeo, preço de $35 e link para o redirecionamento
    setupPaypalButton(2, '35.00', 'https://encurtador.com.br/kkw96');

    // Para o terceiro vídeo, preço de $25 e link para o redirecionamento
    setupPaypalButton(3, '25.00', 'https://abrir.link/VKZYZ');

    // Para o quarto vídeo, preço de $30 e link para o redirecionamento
    setupPaypalButton(4, '30.00', 'https://encurtador.com.br/hXA1OS');

    // Para o quinto vídeo, preço de $30 e link para o redirecionamento
    setupPaypalButton(5, '30.00', 'https://encurtador.com.br/jxFfy');

    // Para o sexto vídeo, preço de $25 e link para o redirecionamento
    setupPaypalButton(6, '25.00', 'https://encurtador.com.br/5pW1U');

    // Para o sétimo vídeo, preço de $25 e link para o redirecionamento
    setupPaypalButton(7, '25.00', 'https://encurtador.com.br/e1BQH');

    // Para o oitavo vídeo, preço de $25 e link para o redirecionamento
    setupPaypalButton(8, '25.00', 'https://shre.ink/brv1');

    // Para o nono vídeo, preço de $25 e link para o redirecionamento
    setupPaypalButton(9, '25.00', 'https://encurtador.com.br/u7KcB');

    // Para o décimo vídeo, preço de $25 e link para o redirecionamento
    setupPaypalButton(10, '25.00', 'https://encurtador.com.br/8FTst');

    // Para o décimo vídeo, preço de $10 e link para o redirecionamento
    setupPaypalButton(11, '10.00', 'https://encurtador.com.br/HMCpR');

    // Para o décimo vídeo, preço de $10 e link para o redirecionamento
    setupPaypalButton(12, '35.00', 'https://encurtador.com.br/tD7oE');

    // Para o décimo vídeo, preço de $10 e link para o redirecionamento
    setupPaypalButton(13, '25.00', 'https://encurtador.com.br/ZMXTs');

    // Para o décimo vídeo, preço de $10 e link para o redirecionamento
    setupPaypalButton(14, '30.00', 'https://encurtador.com.br/emaEl');

    // Para o décimo vídeo, preço de $10 e link para o redirecionamento
    setupPaypalButton(15, '40.00', 'https://encurtador.com.br/sXJCj');

    // Para o décimo vídeo, preço de $10 e link para o redirecionamento
    setupPaypalButton(16, '40.00', 'https://encurtador.com.br/uDtkB');

    // Para o décimo vídeo, preço de $10 e link para o redirecionamento
    setupPaypalButton(17, '40.00', 'https://encurtador.com.br/nqcdF');

    // Para o décimo vídeo, preço de $10 e link para o redirecionamento
    setupPaypalButton(18, '35.00', 'https://mega.nz/folder/7UpwjDjL#vNYz87LuzMvyG_c3rJs3Kw/folder/bRJ3gTqK');

    // Para o décimo vídeo, preço de $10 e link para o redirecionamento
    setupPaypalButton(19, '35.00', 'https://mega.nz/folder/PBgkVAKT#ipWfJggJOsTyC2bFrMq2GQ/folder/aBpmCZJD');

    // Para o décimo vídeo, preço de $10 e link para o redirecionamento
    setupPaypalButton(20, '35.00', 'https://mega.nz/folder/PBgkVAKT#ipWfJggJOsTyC2bFrMq2GQ/folder/aBpmCZJD');
});

