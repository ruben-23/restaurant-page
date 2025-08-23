
import './menupage.css';

import steakImage from './images/steak.png';
import sandwichImage from './images/sandwich.png';
import orangeJuiceImage from './images/orange-juice.png';
import lemonadeImage from './images/lemonade.png';
import coffeeImage from './images/coffee.png';
import chocolateCakeImage from './images/chocolate-cake.png';
import vanillaCakeImage from './images/vanilla-cake.png';
import strawberryCakeImage from './images/strawberry-cake.png';



const menuItems = [
    {
        title: 'Steak',
        description: 'Premium grilled steak, perfectly seasoned and cooked to your preference.',
        price: 25,
        imageUrl: steakImage
    },
    {
        title: 'Sandwich',
        description: 'Freshly made gourmet sandwich with premium ingredients and artisan bread.',
        price: 8,
        imageUrl: sandwichImage
    },
    {
        title: 'Orange Juice',
        description: 'Freshly squeezed orange juice, served chilled with natural sweetness.',
        price: 3,
        imageUrl: orangeJuiceImage
    },
    {
        title: 'Lemonade',
        description: 'Homemade lemonade with just the right balance of sweet and tart.',
        price: 3.5,
        imageUrl: lemonadeImage
    },
    {
        title: 'Coffee',
        description: 'Rich, aromatic coffee brewed fresh from premium beans.',
        price: 2,
        imageUrl: coffeeImage
    },
    {
        title: 'Chocolate Cake',
        description: 'Decadent chocolate cake with rich frosting and moist layers.',
        price: 6.5,
        imageUrl: chocolateCakeImage
    },
    {
        title: 'Vanilla Cake',
        description: 'Classic vanilla cake with light, fluffy texture and creamy icing.',
        price:  7,
        imageUrl: vanillaCakeImage
    },
    {
        title: 'Strawberry Cake',
        description: 'Fresh strawberry-infused cake with real fruit and sweet glaze.',
        price: 7,
        imageUrl: strawberryCakeImage
    },
]


function createCard(item) {

    const card = document.createElement('div');
    card.classList.add('card');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const img = document.createElement('img');
    img.src = item.imageUrl;

    imageContainer.appendChild(img);

    const menuInfo = document.createElement('div');
    menuInfo.classList.add('menu-info');

    const h2 = document.createElement('h2');
    h2.textContent = item.title;

    const descriptionPara = document.createElement('p');
    descriptionPara.textContent = item.description;

    const pricePara = document.createElement('p');
    pricePara.textContent = `$ ${item.price}`;

    menuInfo.append(h2, descriptionPara, pricePara);

    card.append(imageContainer, menuInfo);

    return card;
}

function loadMenuPage() {

    const content = document.getElementById('content');
    content.innerHTML = '';
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    for (const item of menuItems)
        cardContainer.appendChild(createCard(item));

    content.appendChild(cardContainer);
}

export default loadMenuPage;