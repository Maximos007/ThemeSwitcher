// const checkbox = document.getElementById('checkbox');

// checkbox.addEventListener('change', () => {
//   // change the theme of the website
//   document.body.classList.toggle('dark');
// });



function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

  const checkbox = document.getElementById('checkbox');

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      setTheme('theme-dark');
    } else {
      setTheme('theme-light');
    }
  });

(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
  } else {
    setTheme('theme-light');
  }
})();