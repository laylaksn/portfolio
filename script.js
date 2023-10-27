document.addEventListener("DOMContentLoaded", function() {
    // JavaScript to handle the lightbox

// Get the project tiles and lightbox elements
const projectTiles = document.querySelectorAll('.project-tile');
const lightbox = document.getElementById('project-lightbox');
const closeLightbox = document.getElementById('close-lightbox');

// Function to open the lightbox
function openLightbox(project) {
  lightbox.style.display = 'block';
}

// Function to close the lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
}

// Event listeners for opening and closing the lightbox
projectTiles.forEach((tile, index) => {
  tile.addEventListener('click', () => {
    openLightbox(index);
  });
});

closeLightbox.addEventListener('click', () => {
  closeLightbox();
});

// Close the lightbox when clicking outside the content
window.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});
