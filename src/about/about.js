import { contentBox } from "../home/home.js";

const aboutBtn = document.querySelector('#about-btn');

function loadAbout() {
    const storyContainer = document.createElement('div');
    const storyHeading = document.createElement('h1');
    const storyHeadingDescription = document.createElement('h3');
    const storyText1 = document.createElement('p');
    const storyText2 = document.createElement('p');
    storyContainer.className = 'story-container';
    storyHeading.className = 'common-style'
    storyHeadingDescription.className = 'common-style';
    storyHeading.textContent = 'Our Story'
    storyText1.textContent = `Ember & Olive started with a simple idea: create a place where people can enjoy honest food, warm hospitality, and good company.`;
    storyText2.textContent = `Our kitchen combines traditional cooking techniques with modern flavours. We use fresh ingredients, prepare our sauces in-house, and cook our pizzas in a wood-fired oven to create that distinctive smoky flavour.`;
    storyContainer.append(storyHeading,storyHeadingDescription, storyText1, storyText2);

    const philosophyContainer = document.createElement('div');
    const philosophyHeading1 = document.createElement('h2');
    const philosophyHeading2 = document.createElement('h3');
    const philosophyText1 = document.createElement('p');
    const philosophyHeading3 = document.createElement('h3');
    const philosophyText2 = document.createElement('p');
    const philosophyHeading4 = document.createElement('h3');
    const philosophyText3 = document.createElement('p');
    philosophyContainer.className = 'philosophy-container';
    philosophyHeading1.className = 'common-style';
    philosophyHeading2.className = 'common-style';
    philosophyHeading3.className = 'common-style';
    philosophyHeading4.className = 'common-style';
    philosophyHeading1.textContent = `Our Philosophy`;
    philosophyHeading2.textContent = `Fresh Ingredients`;
    philosophyText1.textContent = `We believe quality food starts with quality ingredients.`;
    philosophyHeading3.textContent = `Made with Care`;
    philosophyText2.textContent = `Every dish is prepared fresh and served with attention to detail.`;
    philosophyHeading4.textContent = `Good Company`;
    philosophyText3.textContent = `Food tastes better when shared with people you care about.`;
    philosophyContainer.append(philosophyHeading1,philosophyHeading2,philosophyText1,philosophyHeading3,philosophyText2,philosophyHeading4,philosophyText3);

    const openingHoursContainer = document.createElement('div');
    const openingHoursHeading = document.createElement('h2');
    const monday = document.createElement('p');
    const tuesday = document.createElement('p');
    const wednesday = document.createElement('p');
    const thursday = document.createElement('p');
    const friday = document.createElement('p');
    const saturday = document.createElement('p');
    const sunday = document.createElement('p');
    openingHoursContainer.className = 'opening-hours-container';
    openingHoursHeading.className = 'common-style';
    openingHoursHeading.textContent = `Opening Hours`;
    monday.textContent = `Monday: 12:00 PM - 10:00 PM`;
    tuesday.textContent = `Tuesday: 12:00 PM - 10:00 PM`;
    wednesday.textContent = `Wednesday: 12:00 PM - 10:00 PM`;
    thursday.textContent = `Thursday: 12:00 PM - 10:30 PM`;
    friday.textContent = `Friday: 12:00 PM - 11:00 PM`;
    saturday.textContent = `Saturday: 11:00 PM - 11:00 PM`;
    sunday.textContent = `Sunday: 11:00 PM - 9:00 PM`;
    openingHoursContainer.append(openingHoursHeading,monday,tuesday,wednesday,thursday,friday,saturday,sunday);

    const locationContainer = document.createElement('div');
    const locationHeading = document.createElement('h3');
    const locationAddress = document.createElement('address');
    const locationPhone = document.createElement('p');
    const locationPhoneStrong = document.createElement('strong');
    locationContainer.className = 'location-container';
    locationHeading.className = 'common-style';
    locationHeading.textContent = 'Location';
    locationAddress.textContent = '24 Willow Lane, Manchester, UK';
    locationPhoneStrong.textContent = 'Phone: ';
    locationPhone.textContent = '+44 161 555 0198';
    locationPhone.prepend(locationPhoneStrong);
    locationContainer.append(locationHeading,locationAddress,locationPhone);

    contentBox.removeAttribute('id')
    contentBox.className = 'about-content-box'
    contentBox.append(storyContainer,philosophyContainer, openingHoursContainer,locationContainer);
}

aboutBtn.addEventListener('click', function(){
    contentBox.innerHTML = ''
    loadAbout();
})