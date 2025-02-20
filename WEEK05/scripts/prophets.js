const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets); // passing the prophets array
}

getProphetData(url);

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // Creating the heading for full name
        let portrait = document.createElement('img');

        // Build the h2 content to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`; // Accessing firstname and lastname properties
        // Build the image portrait by setting the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // Using firstname and lastname
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName); // Appending the fullName element
        card.appendChild(portrait);

        cards.appendChild(card); // Appending the card to the main cards container
    });
}
