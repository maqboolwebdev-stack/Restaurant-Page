export const contentBox = document.querySelector('#content');
const homeBtn = document.querySelector('#home-btn');

import { loadMenu } from '../menu/menu.js';

function loadHome() {
  // creating elements
  const headingContainer = document.createElement('div');
  const heading = document.createElement('h1');
  const tagline1 = document.createElement('p');
  const tagline2 = document.createElement('p');
  const exploreBtn = document.createElement('button');

  // adding style classes
  headingContainer.className = 'heading-container';
  heading.className = 'heading';
  exploreBtn.className = 'explore-btn';

  // filling the data to elements
  heading.textContent = 'Ember & Olive';
  tagline1.textContent = 'Where Fire Meets Flavour';
  tagline2.textContent =
    'Fresh ingredients. Wood-fired flavours. Unforgettable meals.';
  exploreBtn.textContent = 'Explore our Menu';

  // Appending elements to sub-container
  headingContainer.append(heading, tagline1, tagline2, exploreBtn);

  // creating elements
  const welcomeSection = document.createElement('div');
  const welcomeText = document.createElement('h2');
  const welcomeDescription1 = document.createElement('p');
  const welcomeDescription2 = document.createElement('p');

  // adding style classes
  welcomeSection.className = 'welcome-section';
  welcomeText.className = 'welcome-text';

  // filling the data to elements
  welcomeText.textContent = 'welcome-text';
  welcomeDescription1.textContent = `At Ember & Olive, we believe great food starts with simple ingredients
  and bold flavours. From our wood-fired oven to your table, every dish is prepared with care and served fresh.`;
  welcomeDescription2.textContent = `Whether you're joining us for a quick lunch, a family dinner, or a relaxed evening with friends, there's always something delicious waiting for you.`;

  // Appending elements to sub-container
  welcomeSection.append(welcomeText, welcomeDescription1, welcomeDescription2);

  // creating elements
  const todayContainer = document.createElement('div');
  const todaySpecial = document.createElement('h2');
  const todayTitle = document.createElement('h3');
  const todayPrice = document.createElement('p');

  // adding style classes
  todayContainer.className = 'today-sp';
  todaySpecial.className = 'today';

  // filling the data to elements
  todaySpecial.textContent = `Today's Special`;
  todayTitle.textContent = `Smoked Garlic Chicken`;
  todayPrice.textContent = `$14.95`;

  // Appending elements to sub-container
  todayContainer.append(todaySpecial, todayTitle, todayPrice);

  // creating elements
  const quoteContainer = document.createElement('div');
  const quoteHeading = document.createElement('h3');
  const quoteText = document.createElement('q');

  // adding style classes
  quoteContainer.className = 'quote-container';
  quoteHeading.className = 'quote-heading';

  // filling the data to elements
  quoteHeading.textContent = `Restaurant Quote`;
  quoteText.textContent = `Good food brings people together, and every great meal deserves a story.`;

  // Appending elements to sub-container
  quoteContainer.append(quoteHeading, quoteText);

  // add style class to main container for home-page
  contentBox.className = 'home-content-container';

  // Appending sub-container to Main-container
  contentBox.append(
    headingContainer,
    welcomeSection,
    todayContainer,
    quoteContainer,
  );

  exploreBtn.addEventListener('click', function () {
  // Clear the Main-container for new Data
    contentBox.innerHTML = '';

    loadMenu();
  });
}

  // creating elements for footer for every page
const footer = document.createElement('footer');
const link = document.createElement('a');

// adding style classes
footer.className = 'footer';
link.className = 'link';

link.href = `https://github.com/maqboolwebdev-stack/Restaurant-Page`;
link.textContent = `Created by Waqas Maqbool`;

// Appending element 
footer.append(link); // in footer and,
document.body.append(footer); // footer in body

// By default first page as home-page
loadHome();

homeBtn.addEventListener('click', function () {
  // Clear the Main-container for new Data
  contentBox.innerHTML = '';

  loadHome();
});
