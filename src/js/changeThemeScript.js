import Theme from './allTheme.js'

const refs = {
    addTheme: document.querySelector('body'),
    changeTheme: document.querySelector('#theme-switch-toggle')
}

const currentTheme = localStorage.getItem('theme');

if (currentTheme === Theme.DARK) {
    refs.addTheme.classList.add(Theme.DARK);
    refs.changeTheme.checked = true;
}

const changeCheckTheme = () => {
    if (refs.changeTheme.checked) {
        refs.addTheme.classList.add(Theme.DARK)
        localStorage.setItem('theme', Theme.DARK)
        return
    }
    refs.addTheme.classList.remove(Theme.DARK)
    refs.addTheme.classList.add(Theme.LIGHT)
    localStorage.setItem('theme', Theme.LIGHT);
}

refs.changeTheme.addEventListener('change', changeCheckTheme);
