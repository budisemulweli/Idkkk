let noBtn = document.getElementById("noBtn");
let rewardCard = document.getElementById("reward");

noBtn.addEventListener("mouseover", () => {
  const i = Math.floor(Math.random() * 300);
  const j = Math.floor(Math.random() * 100);
  noBtn.style.position = "absolute";
  noBtn.style.top = j + "px";
  noBtn.style.left = i + "px";
});

function showReward() {
  rewardCard.style.display = "block";
  createConfetti();
  askRedirect();
}

function createConfetti() {
  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(confetti);
  }
}

function getRandomColor() {
  const colors = ["#ff4081", "#ffeb3b", "#00e5ff", "#69f0ae", "#ffa726"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function askRedirect() {
  let btnContainer = document.createElement("div");
  btnContainer.style.marginTop = "20px";

  let askText = document.createElement("p");
  askText.innerText = "Would you like to redeem this coupon by chatting on WhatsApp?";
  askText.style.fontWeight = "bold";
  askText.style.marginBottom = "10px";
  btnContainer.appendChild(askText);

  let yesBtn = document.createElement("button");
  yesBtn.innerText = "Yes 😄";
  yesBtn.className = "yes";
  yesBtn.onclick = () => {
    window.location.href = "https://wa.me/27670177765?text=Hey!%20I%20just%20claimed%20my%20ice%20cream%20date%20coupon%20🍦";
  };

  let noBtn = document.createElement("button");
  noBtn.innerText = "No 😅";
  noBtn.className = "no";

  noBtn.addEventListener("mouseover", () => {
    const i = Math.floor(Math.random() * 200);
    const j = Math.floor(Math.random() * 100);
    noBtn.style.position = "absolute";
    noBtn.style.top = j + "px";
    noBtn.style.left = i + "px";
  });

  btnContainer.appendChild(yesBtn);
  btnContainer.appendChild(noBtn);
  rewardCard.appendChild(btnContainer);
}
