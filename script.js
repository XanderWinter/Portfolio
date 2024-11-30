document.addEventListener('DOMContentLoaded', () => {
    // Select buttons
    const aboutBtn = document.getElementById('about-btn');
    const projectsBtn = document.getElementById('projects-btn');
    const contactBtn = document.getElementById('contact-btn');

    // Add event listeners
    if (aboutBtn) {
        aboutBtn.addEventListener('click', () => {
            console.log('About button clicked');
            alert('You clicked the About button!');
        });
    }

    if (projectsBtn) {
        projectsBtn.addEventListener('click', () => {
            console.log('Projects button clicked');
            alert('You clicked the Projects button!');
        });
    }

    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            console.log('Contact button clicked');
            alert('You clicked the Contact button!');
        });
    }
});
