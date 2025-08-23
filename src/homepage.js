
import './homepage.css';
import loadMenuPage from './menupage.js';

import restaurantImage from "./images/emi-ymerai-aJ-P0WPKhCc-unsplash.jpg";

function loadHomePage() {

    const content = document.getElementById('content');
    content.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('content-div');

    const img = document.createElement('img');
    img.src = restaurantImage;
    img.alt = 'Image featuring multiple tables with glasses on them in a restaurant';

    const info = document.createElement('div');
    info.classList.add('info');

    const h2 = document.createElement('h2');
    h2.textContent = 'Welcome to Restaurant';
    const p = document.createElement('p');
    p.textContent = 'Welcome to our restaurant, where culinary passion meets exceptional flavors! We pride ourselves on using the freshest ingredients to create mouthwatering dishes that delight every palate. From sizzling steaks to refreshing beverages, our menu offers a delightful variety for every occasion';

    info.append(h2, p);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const menuButton = document.createElement('button');
    menuButton.addEventListener('click', loadMenuPage);
    menuButton.textContent = 'Menu';

    buttonContainer.append(menuButton);

    div.append(img, info, buttonContainer);
    content.appendChild(div);
}

export default loadHomePage;