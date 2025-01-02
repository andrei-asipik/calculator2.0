let isDarkTheme = localStorage.getItem('theme') === 'dark';
const themeToggle = document.getElementById('theme-toggle');

function updateTheme() {
  document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
  themeToggle.innerHTML = isDarkTheme ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
  isDarkTheme = !isDarkTheme;

  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  themeToggle.innerHTML = isDarkTheme ? '☀️' : '🌙';
  updateTheme();
});

updateTheme();
