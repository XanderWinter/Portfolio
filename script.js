document.addEventListener('DOMContentLoaded', function () {
    // Existing code remains unchanged

    // Load Projects Section by default (optional)
    // loadSection('projects.html');

    // Add event listeners for project items after loading the Projects section
    function addProjectItemListeners() {
        const projectItems = document.querySelectorAll('.project-item');

        projectItems.forEach(item => {
            const img = item.querySelector('img');

            // Mousemove event for tilt effect
            item.addEventListener('mousemove', (e) => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                const rotateX = (-y / (rect.height / 2)) * 10 + 'deg';
                const rotateY = (x / (rect.width / 2)) * 10 + 'deg';
                img.style.setProperty('--rotateX', rotateX);
                img.style.setProperty('--rotateY', rotateY);
            });

            // Mouseleave event to reset tilt
            item.addEventListener('mouseleave', () => {
                img.style.setProperty('--rotateX', '0deg');
                img.style.setProperty('--rotateY', '0deg');
            });

            // Click event to open modal
            item.addEventListener('click', () => {
                openModal(item.querySelector('img').src, item.dataset.description);
            });
        });
    }

    // Function to open modal with image and description
    function openModal(imageSrc, description) {
        // Create modal elements
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const closeModal = document.createElement('span');
        closeModal.classList.add('close-modal');
        closeModal.innerHTML = '&times;';
        closeModal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        const img = document.createElement('img');
        img.src = imageSrc;

        const desc = document.createElement('p');
        desc.classList.add('modal-description');
        desc.textContent = description;

        modalContent.appendChild(closeModal);
        modalContent.appendChild(img);
        modalContent.appendChild(desc);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Display the modal
        modal.style.display = 'block';
    }

    // Modify the loadSection function to add listeners after loading
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

                // Check if the loaded section is the projects section
                if (sectionFile === 'projects.html') {
                    addProjectItemListeners();
                }
            })
            .catch(error => {
                console.error('Error loading section:', error);
                document.getElementById('mainContent').innerHTML = '<p>Sorry, an error occurred while loading the content.</p>';
            });
    }

    // Event listeners for navigation buttons
    document.getElementById('aboutBtn').addEventListener('click', function () {
        loadSection('about.html');
    });

    document.getElementById('projectsBtn').addEventListener('click', function () {
        loadSection('projects.html');
    });

    document.getElementById('contactBtn').addEventListener('click', function () {
        loadSection('contact.html');
    });

    // Optionally, load the projects section by default
    // loadSection('projects.html');
});
