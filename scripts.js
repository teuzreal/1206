const screens = document.querySelectorAll(".screen");
let currentScreen = 0;

function startExperience() {
  const music = document.getElementById("music");
  
  if (music) {
    music.play().catch(() => {});
  }
  
  nextScreen();
}

function nextScreen() {
  
  if (!screens.length) return;
  
  screens[currentScreen].classList.remove("active");
  
  currentScreen++;
  
  if (currentScreen >= screens.length) {
    currentScreen = screens.length - 1;
  }
  
  screens[currentScreen].classList.add("active");
  
  if (currentScreen === screens.length - 1) {
    typeLetter();
  }
}

const message = `
feliz dia dos namorados, meu amor 🤍

hoje eu quis fazer algo especial para você.

obrigado por todos os momentos,
por todos os sorrisos,
por todos os abraços.

você é a melhor parte dos meus dias.

eu escolheria você mil vezes,
em mil vidas diferentes.

euteamo I-N-F-I-N-I-T-A-M-E-N-T-E 🤍
`;

let typingStarted = false;

function typeLetter() {
  
  if (typingStarted) return;
  
  typingStarted = true;
  
  const target = document.getElementById("typing");
  
  if (!target) return;
  
  let i = 0;
  
  const interval = setInterval(() => {
    
    if (i < message.length) {
      target.innerHTML += message.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
    
  }, 40);
}

function createHeart() {
  
  const container = document.querySelector(".hearts");
  
  if (!container) return;
  
  const heart = document.createElement("div");
  
  heart.className = "heart";
  heart.innerHTML = "🤍";
  
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";
  
  container.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 400);
