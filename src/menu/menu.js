import { contentBox } from '../home/home.js';
import { menuData } from './menu-items-data.js';
import './menu.css';

const menuBtn = document.querySelector('#menu-btn');

function createMenuItem(item) {
  const menuItem = document.createElement('div');
  const name = document.createElement('h2');
  const description = document.createElement('p');
  const price = document.createElement('p');

  menuItem.className = 'menu-items';
  name.className = 'menu-items-heading';
  price.className = 'price';

  name.textContent = item.name;
  description.textContent = item.description;
  price.textContent = item.price;

  menuItem.append(name, description, price);

  return menuItem;
}

menuData.forEach((category) => {
  category.items.forEach((item) => {
    console.log(createMenuItem(item));
  });
});

export function loadMenu() {
  contentBox.removeAttribute('id');
  contentBox.className = 'menu-content';

  menuData.forEach((category) => {
    const categoryHeading = document.createElement('h1');

    categoryHeading.className = 'menu-items-heading';
    categoryHeading.textContent = category.category;

    contentBox.append(categoryHeading);

    category.items.forEach((item) => {
      const menuItem = createMenuItem(item);
      contentBox.append(menuItem);
    });
  });
}

menuBtn.addEventListener('click', function () {
  contentBox.innerHTML = '';
  loadMenu();
});

console.log(menuData);
