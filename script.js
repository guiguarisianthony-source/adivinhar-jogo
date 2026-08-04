// Sorteia um número de 1 a 3
let numeroSecreto = Math.floor(Math.random() * 3) + 1;
let tentativas = 0;
let winStreak = 0;

function adivinhar() {
  const chute = parseInt(document.getElementById('chute').value);
  const mensagem = document.getElementById('mensagem');
  const streakElemento = document.getElementById('streak');

  if (isNaN(chute) || chute < 1 || chute > 3) {
    mensagem.textContent = "Por favor, digite um número válido entre 1 e 3.";
    mensagem.style.color = "#f38ba8";
    return;
  }

  tentativas++;

  if (chute === numeroSecreto) {
    winStreak++;
    streakElemento.textContent = winStreak;
    mensagem.textContent = `Parabéns! Você acertou o número ${numeroSecreto}! 🔥 Sequência: ${winStreak}`;
    mensagem.style.color = "#a6e3a1";
    
    // Sortear um novo número para continuar jogando
    numeroSecreto = Math.floor(Math.random() * 3) + 1;
  } else {
    winStreak = 0;
    streakElemento.textContent = winStreak;
    mensagem.textContent = "Você errou, tente novamente! Sua sequência voltou a 0.";
    mensagem.style.color = "#f9e2af";
  }

  // Limpa o campo do input para o próximo palpite
  document.getElementById('chute').value = '';
}
