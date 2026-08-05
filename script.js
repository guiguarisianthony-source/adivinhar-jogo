let numeroSecreto = Math.floor(Math.random() * 3) + 1;
let winStreak = 0;

function adivinhar() {
  const inputChute = document.getElementById('chute');
  const chute = parseInt(inputChute.value);
  const mensagem = document.getElementById('mensagem');
  const streakElemento = document.getElementById('streak');

  // SE DIGITAR 67
  if (chute === 67) {
    abrirMeme();
    inputChute.value = '';
    return;
  }

  if (isNaN(chute) || chute < 1 || chute > 3) {
    mensagem.textContent = "Por favor, digite um número válido entre 1 e 3.";
    mensagem.style.color = "#f38ba8";
    return;
  }

  if (chute === numeroSecreto) {
    winStreak++;
    streakElemento.textContent = winStreak;
    mensagem.textContent = `Parabéns! Você acertou o número ${numeroSecreto}! 🔥 Sequência: ${winStreak}`;
    mensagem.style.color = "#a6e3a1";
    numeroSecreto = Math.floor(Math.random() * 3) + 1;
  } else {
    winStreak = 0;
    streakElemento.textContent = winStreak;
    mensagem.textContent = "Você errou, tente novamente! Sua sequência voltou a 0.";
    mensagem.style.color = "#f9e2af";
  }

  inputChute.value = '';
}

function abrirMeme() {
  const modal = document.getElementById('modal-meme');
  const video = document.getElementById('video-meme');

  modal.classList.remove('esconde');
  
  if (video) {
    video.currentTime = 0;
    video.muted = false; // Som original do vídeo ativo
    video.play().catch(error => {
      console.log("Aguardando permissão de mídia do usuário:", error);
    });
  }
}

function fecharMeme() {
  const modal = document.getElementById('modal-meme');
  const video = document.getElementById('video-meme');

  modal.classList.add('esconde');

  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}
