(function() {
  function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }

  window.toggleTheme = function() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  // Initialize theme on page load
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  // Check for system preference if no theme is saved
  if (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  }
})();