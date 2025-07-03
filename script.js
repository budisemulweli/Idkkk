const noBtn = document.getElementById("noBtn");
let countdownInterval;

noBtn.addEventListener("mouseover", () => {
  const container = document.querySelector(".buttons");
  const containerRect = container.getBoundingClientRect();
  const maxX = containerRect.width - noBtn.offsetWidth;
  const maxY = containerRect.height - noBtn.offsetHeight;
  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

function showReward() {
  const reward = document.getElementById("reward");
  reward.style.display = "block";
  launchConfetti();
  startCountdown();
}

function startCountdown() {
  let seconds = 3;
  const countdown = document.getElementById("countdown");
  countdownInterval = setInterval(() => {
    seconds--;
    countdown.textContent = `Redirecting to WhatsApp in ${seconds}...`;
    if (seconds === 0) {
      clearInterval(countdownInterval);
      window.location.href = "https://wa.me/27670177765?text=I%20accept%20the%20ice%20cream%20date%20coupon!";
    }
  }, 1000);
}

function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
  }
}

function getRandomColor() {
  const colors = ["#f44336", "#e91e63", "#9c27b0", "#3f51b5", "#03a9f4", "#4caf50", "#ff9800", "#ffc107"];
  return colors[Math.floor(Math.random() * colors.length)];
}
