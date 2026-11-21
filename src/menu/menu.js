import { contentBox } from '../home/home.js';
import { menuData } from './menu-items-data.js';
import { setActiveNav } from '../navigation.js';
import './menu.css';

const menuBtn = document.querySelector('#menu-btn');

function createMenuItem(item) {
  // creating elements
  const menuItem = document.createElement('article');
  const name = document.createElement('h3');
  const description = document.createElement('p');
  const price = document.createElement('p');

  //  add style classes
  menuItem.className = 'menu-items';
  name.className = 'menu-items-heading';
  price.className = 'price';

  // elements fill with item.(----)
  name.textContent = item.name;
  description.textContent = item.description;
  price.textContent = item.price;

  // Appending element to sub-container
  menuItem.append(name, description, price);

  // return menuItem container for looping
  return menuItem;
}

export function loadMenu() {
  // add style menuBtn when Menu load
  setActiveNav('menu-btn');
  document.title = 'Menu | Ember & Olive';

  // add style class for Menu main container
  contentBox.className = 'menu-content';

  const pageHeading = document.createElement('h1');
  pageHeading.className = 'menu-items-heading';
  pageHeading.textContent = 'Our Menu';
  contentBox.append(pageHeading);

  menuData.forEach((category) => {
    const categorySection = document.createElement('section');
    categorySection.className = 'menu-category';
    const categoryHeading = document.createElement('h2');

    categoryHeading.className = 'menu-items-heading';
    categoryHeading.textContent = category.category;
    categorySection.append(categoryHeading);

    category.items.forEach((item) => {
      const menuItem = createMenuItem(item);
      categorySection.append(menuItem);
    });

    contentBox.append(categorySection);
  });
}

menuBtn.addEventListener('click', function () {
  // Clear the main container for new page
  contentBox.innerHTML = '';

  loadMenu();
  contentBox.focus({ preventScroll: true });
});
