export const contentBox = document.querySelector('#content');
const homeBtn = document.querySelector('#home-btn');

import { loadMenu } from '../menu/menu.js';

function loadHome() {
  const headingContainer = document.createElement('div');
  const heading = document.createElement('h1');
  const tagline1 = document.createElement('p');
  const tagline2 = document.createElement('p');
  const exploreBtn = document.createElement('button');
  headingContainer.className = 'heading-container';
  heading.className = 'heading';
  exploreBtn.className = 'explore-btn';
  heading.textContent = 'Ember & Olive';
  tagline1.textContent = 'Where Fire Meets Flavour';
  tagline2.textContent =
    'Fresh ingredients. Wood-fired flavours. Unforgettable meals.';
  exploreBtn.textContent = 'Explore our Menu';
  headingContainer.append(heading, tagline1, tagline2, exploreBtn);

  const welcomeSection = document.createElement('div');
  const welcomeText = document.createElement('h2');
  const welcomeDescription1 = document.createElement('p');
  const welcomeDescription2 = document.createElement('p');
  welcomeSection.className = 'welcome-section';
  welcomeText.className = 'welcome-text';
  welcomeText.textContent = 'welcome-text';
  welcomeDescription1.textContent = `At Ember & Olive, we believe great food starts with simple ingredients
  and bold flavours. From our wood-fired oven to your table, every dish is prepared with care and served fresh.`;
  welcomeDescription2.textContent = `Whether you're joining us for a quick lunch, a family dinner, or a relaxed evening with friends, there's always something delicious waiting for you.`;
  welcomeSection.append(welcomeText, welcomeDescription1, welcomeDescription2);

  const todayContainer = document.createElement('div');
  const todaySpecial = document.createElement('h2');
  const todayTitle = document.createElement('h3');
  const todayPrice = document.createElement('p');
  todayContainer.className = 'today-sp';
  todaySpecial.className = 'today';
  todaySpecial.textContent = `Today's Special`;
  todayTitle.textContent = `Smoked Garlic Chicken`;
  todayPrice.textContent = `$14.95`;
  todayContainer.append(todaySpecial, todayTitle, todayPrice);

  const quoteContainer = document.createElement('div');
  const quoteHeading = document.createElement('h3');
  const quoteText = document.createElement('q');
  quoteContainer.className = 'quote-container';
  quoteHeading.className = 'quote-heading';
  quoteHeading.textContent = `Restaurant Quote`;
  quoteText.textContent = `Good food brings people together, and every great meal deserves a story.`;
  quoteContainer.append(quoteHeading, quoteText);

  contentBox.className = 'home-content-container';

  contentBox.append(
    headingContainer,
    welcomeSection,
    todayContainer,
    quoteContainer,
  );

  exploreBtn.addEventListener('click', function () {
    contentBox.innerHTML = '';
    loadMenu();
  });
}

const footer = document.createElement('footer');
const link = document.createElement('a');
footer.className = 'footer';
link.className = 'link';
link.href = `https://github.com/maqboolwebdev-stack/Restaurant-Page`;
link.textContent = `Created by Waqas Maqbool`;
footer.append(link);
document.body.append(footer);

loadHome();

homeBtn.addEventListener('click', function () {
  contentBox.innerHTML = '';
  loadHome();
});
