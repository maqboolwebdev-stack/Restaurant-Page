import { contentBox } from '../home/home.js';
import { setActiveNav } from '../navigation.js';

const aboutBtn = document.querySelector('#about-btn');

function loadAbout() {
  // add style to about when about page load
  setActiveNav('about-btn');
  document.title = 'About | Ember & Olive';
  document.body.dataset.page = 'about';

  // creating elements
  const storyContainer = document.createElement('section');
  storyContainer.setAttribute('aria-labelledby', 'story-heading');
  const storyHeading = document.createElement('h1');
  storyHeading.id = 'story-heading';
  const storyText1 = document.createElement('p');
  const storyText2 = document.createElement('p');

  // adding style classes
  storyContainer.className = 'story-container surface-card';
  storyHeading.className = 'common-style';

  // filling the data to elements
  storyHeading.textContent = 'Our Story';
  storyText1.textContent = `Ember & Olive started with a simple idea: create a place where people can enjoy honest food, warm hospitality, and good company.`;
  storyText2.textContent = `Our kitchen combines traditional cooking techniques with modern flavours. We use fresh ingredients, prepare our sauces in-house, and cook our pizzas in a wood-fired oven to create that distinctive smoky flavour.`;

  // Appending elements to sub-container
  storyContainer.append(
    storyHeading,
    storyText1,
    storyText2,
  );

  // creating elements
  const philosophyContainer = document.createElement('section');
  philosophyContainer.setAttribute('aria-labelledby', 'philosophy-heading');
  const philosophyHeading1 = document.createElement('h2');
  philosophyHeading1.id = 'philosophy-heading';
  const philosophyHeading2 = document.createElement('h3');
  const philosophyText1 = document.createElement('p');
  const philosophyHeading3 = document.createElement('h3');
  const philosophyText2 = document.createElement('p');
  const philosophyHeading4 = document.createElement('h3');
  const philosophyText3 = document.createElement('p');

  // adding style classes
  philosophyContainer.className = 'philosophy-container surface-card';
  philosophyHeading1.className = 'common-style';
  philosophyHeading2.className = 'common-style';
  philosophyHeading3.className = 'common-style';
  philosophyHeading4.className = 'common-style';

  // filling the data to elements
  philosophyHeading1.textContent = `Our Philosophy`;
  philosophyHeading2.textContent = `Fresh Ingredients`;
  philosophyText1.textContent = `We believe quality food starts with quality ingredients.`;
  philosophyHeading3.textContent = `Made with Care`;
  philosophyText2.textContent = `Every dish is prepared fresh and served with attention to detail.`;
  philosophyHeading4.textContent = `Good Company`;
  philosophyText3.textContent = `Food tastes better when shared with people you care about.`;

  // Appending elements to sub-container
  philosophyContainer.append(
    philosophyHeading1,
    philosophyHeading2,
    philosophyText1,
    philosophyHeading3,
    philosophyText2,
    philosophyHeading4,
    philosophyText3,
  );

  // creating elements
  const openingHoursContainer = document.createElement('section');
  openingHoursContainer.setAttribute('aria-labelledby', 'hours-heading');
  const openingHoursHeading = document.createElement('h2');
  openingHoursHeading.id = 'hours-heading';
  const openingHoursTable = document.createElement('table');
  const openingHoursColumns = document.createElement('colgroup');
  const openingHoursHead = document.createElement('thead');
  const openingHoursHeaderRow = document.createElement('tr');
  const openingHoursBody = document.createElement('tbody');

  // adding style classes
  openingHoursContainer.className = 'opening-hours-container surface-card';
  openingHoursHeading.className = 'common-style';
  openingHoursHeading.textContent = `Opening Hours`;

  const dayColumn = document.createElement('col');
  const openingColumn = document.createElement('col');
  const closingColumn = document.createElement('col');
  dayColumn.className = 'day-column';
  openingColumn.className = 'time-column';
  closingColumn.className = 'time-column';
  openingHoursColumns.append(dayColumn, openingColumn, closingColumn);

  ['Day', 'Opens', 'Closes'].forEach((label) => {
    const columnHeading = document.createElement('th');
    columnHeading.scope = 'col';
    columnHeading.textContent = label;
    openingHoursHeaderRow.append(columnHeading);
  });
  openingHoursHead.append(openingHoursHeaderRow);
  openingHoursTable.className = 'opening-hours-table';

  const hours = [
    ['Monday', '12:00 PM', '10:00 PM'],
    ['Tuesday', '12:00 PM', '10:00 PM'],
    ['Wednesday', '12:00 PM', '10:00 PM'],
    ['Thursday', '12:00 PM', '10:30 PM'],
    ['Friday', '12:00 PM', '11:00 PM'],
    ['Saturday', '11:00 AM', '11:00 PM'],
    ['Sunday', '11:00 AM', '9:00 PM'],
  ];

  hours.forEach(([day, opens, closes]) => {
    const row = document.createElement('tr');
    const dayCell = document.createElement('th');
    const opensCell = document.createElement('td');
    const closesCell = document.createElement('td');
    dayCell.scope = 'row';
    dayCell.textContent = day;
    opensCell.textContent = opens;
    closesCell.textContent = closes;
    row.append(dayCell, opensCell, closesCell);
    openingHoursBody.append(row);
  });

  openingHoursTable.append(
    openingHoursColumns,
    openingHoursHead,
    openingHoursBody,
  );
  openingHoursContainer.append(openingHoursHeading, openingHoursTable);

  // creating elements
  const locationContainer = document.createElement('section');
  locationContainer.setAttribute('aria-labelledby', 'location-heading');
  const locationHeading = document.createElement('h2');
  locationHeading.id = 'location-heading';
  const locationAddress = document.createElement('address');
  const locationPhone = document.createElement('a');

  // adding style classes
  locationContainer.className = 'location-container surface-card';
  locationHeading.className = 'common-style';
  locationHeading.textContent = 'Location';
  locationAddress.textContent = '24 Willow Lane, Manchester, UK';

  // filling the data to elements
  locationPhone.textContent = 'Phone: +44 161 555 0198';
  locationPhone.href = 'tel:+441615550198';
  locationPhone.className = 'phone-link';

  // Appending elements to sub-container
  locationContainer.append(locationHeading, locationAddress, locationPhone);

  contentBox.className = 'about-content-box';

  // Appending sub-container to Main-container
  contentBox.append(
    storyContainer,
    philosophyContainer,
    openingHoursContainer,
    locationContainer,
  );
}

aboutBtn.addEventListener('click', function () {
  // Clear the Main-container for new Data
  contentBox.innerHTML = '';

  loadAbout();
  contentBox.focus({ preventScroll: true });
});
