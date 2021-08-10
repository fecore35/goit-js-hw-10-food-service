const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const THEME_STYLE_KEY = 'theme';
const body = document.body;
const switchToggle = document.querySelector('#theme-switch-toggle');
const getItemLocalStorage = localStorage.getItem(THEME_STYLE_KEY);

switchToggle.addEventListener('input', changeThemeStyle);

if (getItemLocalStorage) {
  body.setAttribute('class', getItemLocalStorage);
}

if (getItemLocalStorage === Theme.DARK) {
  switchToggle.setAttribute('checked', true);
}

function changeThemeStyle(event) {
  if (event.target.checked) {
    body.setAttribute('class', Theme.DARK);
    localStorage.setItem(THEME_STYLE_KEY, Theme.DARK);
    return;
  }

  body.setAttribute('class', Theme.LIGHT);
  localStorage.setItem(THEME_STYLE_KEY, Theme.LIGHT);
}
