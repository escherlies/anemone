const darkSchemeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)')


/**
 * 
 * @param {string} theme "light", "dark" or "auto"
 */
const setTheme = (prefers) => {
  localStorage.setItem('prefersTheme', prefers);

  const themeClassName = (() => {
    if (prefers === 'auto') {
      return darkSchemeMatchMedia.matches ? 'dark' : 'light';
    }
    return prefers;
  })()

  // set the theme
  document.documentElement.className = themeClassName;

  // close the menu
  const themeMenuCheckbox = document.getElementById('themeMenuCheckbox');
  themeMenuCheckbox.checked = false;
}


const getTheme = () => {
  const theme = localStorage.getItem('prefersTheme');
  return theme ? theme : "auto"
}

const initialize = () => {
  const theme = getTheme();
  setTheme(theme);
}


// Event listeners for the theme change
darkSchemeMatchMedia.addEventListener('change', initialize)

initialize()