document.addEventListener("DOMContentLoaded", function() {
    const projectTiles = document.querySelectorAll(".project-tile");
    const lightbox = document.querySelector(".lightbox");
    const lightboxContent = document.querySelector(".lightbox-content");
  
    projectTiles.forEach(tile => {
      tile.addEventListener("click", function() {
        lightbox.style.display = "block";
        // Add project-specific content to lightboxContent here
        lightboxContent.innerHTML = "Additional information about the project";
      });
    });
  
    lightbox.addEventListener("click", function(e) {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  });
  