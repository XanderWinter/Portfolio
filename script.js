document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');

    // Open modal when a gallery item is clicked
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.getAttribute('data-title');
            const description = item.getAttribute('data-description');

            modalTitle.textContent = title;
            modalDescription.textContent = description;

            modal.style.display = 'flex'; // Show the modal
        });
    });

    // Close modal when the 'x' button is clicked
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none'; // Hide the modal
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none'; // Hide the modal
        }
    });
});
