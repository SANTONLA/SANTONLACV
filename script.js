// Interactivity: theme toggle, print, accessibility helpers
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('toggleTheme');
  const printBtn = document.getElementById('printBtn');

  // Initialize theme from localStorage
  const saved = localStorage.getItem('cv-theme');
  if (saved === 'dark') {
    document.body.classList.add('dark');
    if (toggle) { toggle.textContent = 'Modo claro'; toggle.setAttribute('aria-pressed','true'); }
  }

  // Toggle theme
  toggle && toggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('cv-theme', isDark ? 'dark' : 'light');
    toggle.textContent = isDark ? 'Modo claro' : 'Modo oscuro';
    toggle.setAttribute('aria-pressed', String(isDark));
  });

  // Print / Save as PDF
  printBtn && printBtn.addEventListener('click', () => {
    window.print();
  });

  // Keyboard shortcut: P to print, D to toggle theme
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') return; // let default print
    if (e.key.toLowerCase() === 'p' && !e.target.matches('input, textarea')) {
      e.preventDefault();
      window.print();
    }
    if (e.key.toLowerCase() === 'd' && !e.target.matches('input, textarea')) {
      toggle && toggle.click();
    }
  });
});
