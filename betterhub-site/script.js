const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;
const icon = document.getElementById('theme-icon');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  icon.textContent = body.classList.contains('dark') ? '🌙' : '☀️';
});
