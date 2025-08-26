window.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.overlay');
  let top = 0;

  function animate() {
    if (top >= 100) return;
    top += 1;
    overlay.style.top = `${top}%`;
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
});
