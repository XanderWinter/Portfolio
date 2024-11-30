document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    const modalImg = document.createElement('img');
    const closeModal = document.querySelector('.close');

    // Add image element to modal content
    modalContent.appendChild(modalImg);

    // Handle click to focus
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src; // Get clicked image's src
            modalImg.src = imgSrc; // Set the modal image src
            modal.style.display = 'flex'; // Show the modal
        });
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside the image
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
