// Button Event Listeners
document.getElementById('aboutBtn').addEventListener('click', function () {
    loadSection('about.html');
});

document.getElementById('projectsBtn').addEventListener('click', function () {
    loadSection('projects.html');
});

document.getElementById('contactBtn').addEventListener('click', function () {
    loadSection('contact.html');
});

// Function to Load and Display the Selected Section
function loadSection(sectionFile) {
    fetch(sectionFile)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('mainContent').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading section:', error);
            document.getElementById('mainContent').innerHTML = '<p>Sorry, an error occurred while loading the content.</p>';
        });
}
