// calcularimc.js
function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos para peso e altura.';
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);
    let mensagem = '';

    if (imc < 18.5) {
        mensagem = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensagem = 'Dentro do esperado';
    } else {
        mensagem = 'Acima do peso';
    }

    document.getElementById('resultado').innerText = `Seu IMC é ${imc}. ${mensagem}`;
}
