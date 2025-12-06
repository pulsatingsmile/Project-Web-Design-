// Dashboard Page JavaScript

let isDarkMode = false;

// Theme Toggle Function
function toggleTheme() {
  isDarkMode = !isDarkMode;
  const themeToggle = document.getElementById("theme-toggle");

  if (isDarkMode) {
    themeToggle.innerHTML = `
            <img src="./dist/Icons/Sun.svg" alt="" class="w-6 h-6 text-nav-primary">
            <span class="text-text-primary">Switch to Light Mode</span>
        `;
  } else {
    themeToggle.innerHTML = `
            <img src="./dist/Icons/Moon.svg" alt="" class="w-6 h-6 text-nav-primary">
            <span class="text-text-primary">Switch to Dark Mode</span>
        `;
  }

  lucide.createIcons();
}
