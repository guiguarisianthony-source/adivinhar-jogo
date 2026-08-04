// Sorteia um número de 1 a 3
const numeroSecreto = Math.floor(Math.random() * 3) + 1;
let tentativas = 0;

function adivinhar() {
  const chute = parseInt(document.getElementById('chute').value);
  const mensagem = document.getElementById('mensagem');

  if (isNaN(chute) || chute < 1 || chute > 3) {
    mensagem.textContent = "Por favor, digite um número válido entre 1 e 3.";
    mensagem.style.color = "#f38ba8";
    return;
  }

  tentativas++;

  if (chute === numeroSecreto) {
    mensagem.textContent = `Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativa(s)!`;
    mensagem.style.color = "#a6e3a1";
  } else {
    mensagem.textContent = "Você errou, tente novamente!";
    mensagem.style.color = "#f9e2af";
  }
}
