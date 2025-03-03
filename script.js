// DARK MODE TOGGLE
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Switch the icon
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// Immediately reveal all fade-in sections on DOM load (for PDF export)
document.addEventListener('DOMContentLoaded', () => {
  const fadeInSections = document.querySelectorAll('.fade-in-section');
  fadeInSections.forEach(section => {
    section.classList.add('appear');
  });
});
