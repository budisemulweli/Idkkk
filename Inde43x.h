<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>You Brighten the Internet</title>
  <style>
    body {
      background: radial-gradient(circle at top left, #ffe0f0, #c8f0f9);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      overflow: hidden;
      padding: 20px;
    }.container {
  text-align: center;
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  z-index: 1;
  position: relative;
  animation: floatIn 0.8s ease-out;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
}

@keyframes floatIn {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h1 {
  color: #333;
  font-size: 22px;
  margin-bottom: 20px;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #333;
  animation: typing 3s steps(40, end), blink 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}

.buttons {
  margin-top: 30px;
  position: relative;
  height: 100px;
}

button {
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

button:hover {
  transform: scale(1.05);
}

.yes {
  background-color: #4caf50;
  color: white;
  margin-right: 20px;
}

.no {
  background-color: #f44336;
  color: white;
  position: absolute;
}

.reward-card {
  margin-top: 30px;
  display: none;
  background: linear-gradient(135deg, #ffe0ec, #e6fffa);
  border: 2px dashed #ff69b4;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.envelope {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%) scale(0);
  width: 100px;
  height: 60px;
  background: #ff69b4;
  clip-path: polygon(0 0, 100% 0, 50% 50%, 0 100%);
  animation: openEnvelope 0.5s ease-out forwards 0.5s;
  z-index: 1;
}

@keyframes openEnvelope {
  to {
    transform: translateX(-50%) scale(1);
  }
}

.reward-card h2 {
  color: #d81b60;
  font-size: 20px;
}

.reward-card p {
  font-size: 14px;
  color: #555;
}

.confetti {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #ffc107;
  animation: confetti-fall 3s linear infinite;
  opacity: 0.8;
  z-index: 0;
}

@keyframes confetti-fall {
  0% { transform: translateY(-10px) rotate(0deg); }
  100% { transform: translateY(100vh) rotate(360deg); }
}

.countdown {
  margin-top: 15px;
  font-weight: bold;
  font-size: 14px;
  color: #333;
}

audio { display: none; }

@media (max-width: 600px) {
  h1 {
    font-size: 20px;
  }

  .buttons button {
    display: block;
    margin: 10px auto;
  }

  .buttons {
    height: auto;
  }

  .no {
    position: relative;
    top: 0;
    left: 0;
  }
}

  </style>
</head>
<body>
  <audio autoplay>
    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
  </audio>  <div class="container">
    <h1>You brighten the internet a bit today 🌞</h1>
    <p>Do you accept your reward?</p>
    <div class="buttons">
      <button class="yes" onclick="showReward()">Yes</button>
      <button class="no" id="noBtn">No</button>
    </div>
    <div class="reward-card" id="reward">
      <div class="envelope"></div>
      <h2>🍦 Ice Cream Date Coupon</h2>
      <p>This coupon entitles you to one delicious ice cream date with me. Redeemable anytime you're in the mood for sprinkles and smiles 😊</p>
      <div class="countdown" id="countdown">Redirecting to WhatsApp in 3...</div>
    </div>
  </div>  <script>
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
  </script></body>
</html>
