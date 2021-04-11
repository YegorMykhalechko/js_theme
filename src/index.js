'use strict'
import './js/changeThemeScript'
import menuList from './dbJSON/menu.json'
import menuTemplate from './templates/menu.hbs';
import './style/styles.css';


const menu = document.querySelector('.js-menu');

const build = (arr) => {
    const markup = arr.map(obj => menuTemplate(obj)).join('');
    menu.insertAdjacentHTML('beforeend', markup);
};

build(menuList);










