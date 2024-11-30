document.addEventListener('DOMContentLoaded', () => {
    // Button event listeners
    document.getElementById('about-btn').addEventListener('click', () => {
        console.log('About button clicked');
        alert('You clicked on About!');
    });

    document.getElementById('projects-btn').addEventListener('click', () => {
        console.log('Projects button clicked');
        alert('You clicked on Projects!');
    });

    document.getElementById('contact-btn').addEventListener('click', () => {
        console.log('Contact button clicked');
        alert('You clicked on Contact!');
    });
});
