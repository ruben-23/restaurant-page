
import restaurantImage from "./images/emi-ymerai-aJ-P0WPKhCc-unsplash.jpg";

function loadHomePage() {

    const content = document.getElementById('content');
    const div = document.createElement('div');

    const img = document.createElement('img');
    img.src = restaurantImage;
    img.alt = 'Image featuring multiple tables with glasses on them in a restaurant';

    const info = document.createElement('div');
    info.classList.add('info');
    
    const h2 = document.createElement('h2');
    h2.textContent = 'Welcome to Restaurant';
    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iusto libero magni recusandae, molestiae perferendis dolorem sequi a! Magnam magni tempora dignissimos deleniti eos aliquam omnis nostrum? Nostrum, dolorem tempore.';

    info.append(h2, p);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    
    buttonContainer.append(menuButton);

    div.append(img, info, buttonContainer);
    content.appendChild(div);
}

export default loadHomePage;