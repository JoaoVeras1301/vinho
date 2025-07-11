  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (Math.random() * 1 + 2) + "s";
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";

    document.body.appendChild(heart);

    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }

  // Criar vários ícones a cada intervalo
  setInterval(createHeart, 1000);

const botao = document.getElementById("idbotaonao");

  botao.addEventListener("touchstart", () => {
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    const novaPosicaoX = Math.random() * (larguraJanela - botao.offsetWidth);
    const novaPosicaoY = Math.random() * (alturaJanela - botao.offsetHeight);

    botao.style.left = novaPosicaoX + "px";
    botao.style.top = novaPosicaoY + "px";
  });