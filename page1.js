// typing effect
const text = "I wanted to do something special for you, so I made something just for you...";
let i = 0;

function type() {
  document.getElementById("typed").textContent = text.slice(0, i);
  i++;
  if (i <= text.length) {
    setTimeout(type, 28);
  }
}
setTimeout(type, 400);

// floating hearts
const particles = document.getElementById("particles");

function spawnHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = `
    <svg viewBox="0 0 24 24">
      <path fill="#ff6fa5" d="M12 21s-7-4-9-7c-4-6 4-12 9-5 5-7 13-1 9 5-2 3-9 7-9 7z"/>
    </svg>
  `;
  heart.style.left = Math.random() * 90 + "%";
  heart.style.bottom = "-30px";

  particles.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(spawnHeart, 600);
