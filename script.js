document.addEventListener('DOMContentLoaded', () => {
    const galleryItem = document.querySelector('.gallery-item'); // Select the single gallery item
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    const closeModal = document.querySelector('.close');

    // Create an image element for the modal
    const modalImg = document.createElement('img');
    modalContent.appendChild(modalImg);

    // Add click event to open modal
    galleryItem.addEventListener('click', () => {
        const imgSrc = galleryItem.querySelector('img').src; // Get the image's src
        modalImg.src = imgSrc; // Set the modal image's src
        modal.style.display = 'flex'; // Show the modal
    });

    // Close modal on clicking the close button
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
