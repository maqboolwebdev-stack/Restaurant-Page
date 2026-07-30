import { contentBox } from '../home/home.js';
import { menuData } from './menu-items-data.js';
import './menu.css';

const menuBtn = document.querySelector('#menu-btn');

function createMenuItem(item) {
  // creating elements
  const menuItem = document.createElement('div');
  const name = document.createElement('h2');
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
  // add style class for Menu main container
  contentBox.className = 'menu-content';

  menuData.forEach((category) => {
  // This will iterate over MenuData and generate
  // category headings and menu items for each category and item.
    const categoryHeading = document.createElement('h1');

    // add style class
    categoryHeading.className = 'menu-items-heading';
    // and Assign heading
    categoryHeading.textContent = category.category;

    contentBox.append(categoryHeading);

    category.items.forEach((item) => {
      const menuItem = createMenuItem(item);
      contentBox.append(menuItem);
    });
  });
}

menuBtn.addEventListener('click', function () {
  // Clear the main container for new page
  contentBox.innerHTML = '';

  loadMenu();
});
