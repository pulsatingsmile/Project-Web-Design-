// Common JavaScript functions shared across all pages

// Modal Functions
function openModal(title, content) {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-body").innerHTML = content;
  document.getElementById("modal").classList.add("active");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
}

function closeModal() {
  document.getElementById("modal").classList.remove("active");
  document.body.style.overflow = "unset";
}

// Toast Functions
function showToast(message) {
  document.getElementById("toast-message").textContent = message;
  const toast = document.getElementById("toast");
  toast.classList.add("active");

  setTimeout(() => {
    closeToast();
  }, 3000);

  lucide.createIcons();
}

function closeToast() {
  document.getElementById("toast").classList.remove("active");
}

// Set active navigation
function setActiveNav(pageName) {
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (
      btn.getAttribute("href") &&
      btn.getAttribute("href").includes(pageName)
    ) {
      btn.classList.add("active");
    }
  });
}

// Initialize footer year
function initializeFooter() {
  const currentYear = new Date().getFullYear();
  const footerText = document.getElementById("footer-text");
  if (footerText) {
    footerText.textContent = `© ${currentYear} Student Campus Management System. All rights reserved.`;
  }
}

// Initialize common elements on page load
document.addEventListener("DOMContentLoaded", function () {
  initializeFooter();
  lucide.createIcons();
});
