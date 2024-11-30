// Button Event Listeners
document.getElementById('aboutBtn').addEventListener('click', function () {
    showSection('aboutSection');
});

document.getElementById('projectsBtn').addEventListener('click', function () {
    showSection('projectsSection');
});

document.getElementById('contactBtn').addEventListener('click', function () {
    showSection('contactSection');
});

// Function to Display the Selected Section
function showSection(sectionId) {
    var sections = document.querySelectorAll('main section');
    sections.forEach(function (section) {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}
