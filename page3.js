document.addEventListener("DOMContentLoaded", () => {
  // staggered reveal for reminder cards
  const cards = document.querySelectorAll(".reminder-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, 200 + index * 220);
  });

  // floating heart particles (subtle)
  const particlesRoot = document.getElementById("particles");

  function spawnHearts(count = 4) {
    if (!particlesRoot) return;
    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.className = "p-heart";
      el.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path fill="#ff6fa5"
           d="M12 21s-7-4-9-7c-4-6 4-12 9-5 5-7 13-1 9 5-2 3-9 7-9 7z"/>
        </svg>`;
      el.style.left = Math.random() * 90 + "%";
      el.style.bottom = (-10 - Math.random() * 40) + "px";
      const dur = 5.5 + Math.random() * 2.5;
      el.style.animationDuration = dur + "s";
      particlesRoot.appendChild(el);
      setTimeout(() => el.remove(), (dur + 1) * 1000);
    }
  }

  spawnHearts(10);
  setInterval(() => spawnHearts(3), 3500);
});
