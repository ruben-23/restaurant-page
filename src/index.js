
import './style.css';

import loadHomePage from './homepage.js';
import loadMenuPage from './menupage.js';
import loadAboutPage from './aboutpage.js';

loadHomePage();

document.getElementById('home-button').addEventListener('click', loadHomePage);

document.getElementById('about-button').addEventListener('click', loadAboutPage);

document.getElementById('menu-button').addEventListener('click', loadMenuPage);