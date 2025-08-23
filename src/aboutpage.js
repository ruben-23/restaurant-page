
import './aboutpage.css';
import phoneImage from './images/phone-svgrepo-com.svg';
import emailImage  from './images/email-svgrepo-com.svg';
import addressImage from './images/address-svgrepo-com.svg';

function loadAboutPage() {

    const content = document.getElementById('content');
    content.innerHTML = '';
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';

    const p = document.createElement('p');
    p.textContent = "We'd love to hear from you! Whether you have questions, feedback, or special requests, feel free to reach out. Visit us at our location for a delightful dining experience, or call us for reservations and inquiries. You can also email us for event bookings or any other information you may need."

    const phoneDiv = document.createElement('div');
    const phoneImg = document.createElement('img');
    phoneImg.src = phoneImage;
    const phoneH2 = document.createElement('h2');
    phoneH2.textContent = 'Phone: (650) 312-8300';
    phoneDiv.append(phoneImg, phoneH2);

    const emailDiv = document.createElement('div');
    const emailImg = document.createElement('img');
    emailImg.src = emailImage;
    const emailH2 = document.createElement('h2');
    emailH2.textContent = 'Email: restaurant@gmail.com';
    emailDiv.append(emailImg, emailH2);

    const addressDiv = document.createElement('div');
    const addressImg = document.createElement('img');
    addressImg.src = addressImage;
    const addressH2 = document.createElement('h2');
    addressH2.textContent = 'Address: 2053 Evergreen Ave, Modesto, California, United States';
    addressDiv.append(addressImg, addressH2);

    contactContainer.append(h1, p, phoneDiv, emailDiv, addressDiv);

    content.appendChild(contactContainer);
}

export default loadAboutPage;