// ============================================================
// WHISP — main.js
// ============================================================

// ---- Scroll reveal ----
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(
  '.step-card, .case-card, .pricing-card, .stat-item, .demo-card'
).forEach((el) => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ---- Demo countdown timer ----
const chip = document.querySelector('.demo-chip strong');
if (chip) {
  let seconds = 10;
  const tick = () => {
    if (seconds > 0) {
      seconds--;
      chip.textContent = `${seconds}s`;
      setTimeout(tick, 1000);
    } else {
      const card = document.querySelector('.demo-card-body');
      if (card) {
        card.innerHTML = `
          <div style="text-align:center; padding: 24px 0;">
            <div style="font-size:36px; margin-bottom:12px;">💨</div>
            <p style="color:var(--text-muted); font-size:15px;">This Whisp has expired.</p>
            <p style="color:var(--text-dim); font-size:13px; margin-top:6px;">Message deleted. No trace remains.</p>
          </div>
        `;
      }
    }
  };
  setTimeout(tick, 1000);
}

// ---- Nav scroll shadow ----
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.borderBottomColor = 'rgba(255,107,43,0.15)';
  } else {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.08)';
  }
}, { passive: true });
