// Get DOM elements
const form = document.querySelector('form');
const experienceList = document.querySelector('.experience-list');

// Event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Gather form data
    const company = document.getElementById('company').value;
    const role = document.getElementById('role').value;
    const date = document.getElementById('date').value;
    const rounds = document.getElementById('rounds').value;
    const questions = document.getElementById('questions').value;
    const difficulty = document.getElementById('difficulty').value;
    const tips = document.getElementById('tips').value;

    // Create new experience element
    const newExperience = document.createElement('li');
    newExperience.innerHTML = `
        <h3>${role} at ${company}</h3>
        <p>Date: ${date}</p>
        <p>Rounds: ${rounds}</p>
        <p>Difficulty: ${difficulty}</p>
        <a href="#">Read More</a>
    `;

    // Add experience to the list
    experienceList.appendChild(newExperience);

    // Clear form inputs
    form.reset();
});

// Add sample interview experiences
const sampleExperiences = [
    { role: 'Software Engineer', company: 'XYZ Inc.', date: '2023-08-15', rounds: 'Technical Interview, HR Interview', difficulty: 'Medium' },
    // Add more sample experiences here
];

// Populate experience list with sample experiences
sampleExperiences.forEach(experience => {
    const experienceItem = document.createElement('li');
    experienceItem.innerHTML = `
        <h3>${experience.role} at ${experience.company}</h3>
        <p>Date: ${experience.date}</p>
        <p>Rounds: ${experience.rounds}</p>
        <p>Difficulty: ${experience.difficulty}</p>
        <a href="#">Read More</a>
    `;
    experienceList.appendChild(experienceItem);
});
