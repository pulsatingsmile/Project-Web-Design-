// Dashboard Page JavaScript

let isDarkMode = false;

// Theme Toggle Function
function toggleTheme() {
  isDarkMode = !isDarkMode;
  const themeToggle = document.getElementById("theme-toggle");

  if (isDarkMode) {
    themeToggle.innerHTML = `
            <i data-lucide="sun" class="w-5 h-5 text-nav-primary"></i>
            <span class="text-text-primary">Switch to Light Mode</span>
        `;
  } else {
    themeToggle.innerHTML = `
            <i data-lucide="moon" class="w-5 h-5 text-nav-primary"></i>
            <span class="text-text-primary">Switch to Dark Mode</span>
        `;
  }

  lucide.createIcons();
}
