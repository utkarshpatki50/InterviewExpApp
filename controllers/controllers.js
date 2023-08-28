// controller.js

// Sample data for the homepage
const sampleExperiences = [
    { role: 'Software Engineer', company: 'XYZ Inc.', date: '2023-08-15', rounds: 'Technical Interview, HR Interview', difficulty: 'Medium' },
    // Add more sample experiences here
];

// Controller functions

// Get data for the homepage
exports.getHomePage = (req, res) => {
    res.render('index', { experiences: sampleExperiences });
};
