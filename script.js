let numeroSecreto = Math.floor(Math.random() * 3) + 1;
let winStreak = 0;

// VERIFICA SE O NOME JÁ ESTÁ SALVO AO ABRIR O SITE
window.onload = function() {
  const nomeSalvo = localStorage.getItem('nomeUsuarioJogo');
  if (nomeSalvo) {
    iniciarJogo(nomeSalvo);
  }
};

// SALVA O NOME PARA SEMPRE NO NAVEGADOR
function salvarNome() {
  const inputNome = document.getElementById('nome-usuario');
  const nome = inputNome.value.trim();

  if (nome === '') {
    alert('Por favor, digite um nome válido!');
    return;
  }

  localStorage.setItem('nomeUsuarioJogo', nome);
  iniciarJogo(nome);
}

// TROCA A TELA DE LOGIN PELA TELA DO JOGO
function iniciarJogo(nome) {
  document.getElementById('tela-login').classList.add('esconde');
  document.getElementById('tela-jogo').classList.remove('esconde');
  document.getElementById('nome-exibido').textContent = nome;
}

// LÓGICA DO JOGO
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

  // SE DIGITAR 674261
  if (chute === 674261) {
    abrirSecreto();
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

// POPUP 67 (VÍDEO)
function abrirMeme() {
  const modal = document.getElementById('modal-meme');
  const video = document.getElementById('video-meme');

  modal.classList.remove('esconde');
  
  if (video) {
    video.currentTime = 0;
    video.muted = false;
    video.play().catch(error => {
      console.log("Aguardando ação do usuário:", error);
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

// POPUP SECRETO (674261)
function abrirSecreto() {
  const modal = document.getElementById('modal-secreto');
  modal.classList.remove('esconde');
}

function fecharSecreto() {
  const modal = document.getElementById('modal-secreto');
  modal.classList.add('esconde');
}
