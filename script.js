document.addEventListener("DOMContentLoaded", function () {
    // Your other JavaScript code here
  
    // Function to open the lightbox for a specific project
    function openLightbox(lightboxId) {
      var lightbox = document.getElementById(lightboxId);
      lightbox.style.display = "block";
    }
  
    // Function to close the lightbox
    function closeLightbox(lightboxId) {
      var lightbox = document.getElementById(lightboxId);
      lightbox.style.display = "none";
    }
  
    // Attach click event listeners to project tiles
    document.querySelector(".project-tile:nth-child(1)").addEventListener("click", function () {
      openLightbox("project1-lightbox");
    });
  
    document.querySelector(".project-tile:nth-child(2)").addEventListener("click", function () {
      openLightbox("project2-lightbox");
    });
  
    document.querySelector(".project-tile:nth-child(3)").addEventListener("click", function () {
      openLightbox("project3-lightbox");
    });
  });
  