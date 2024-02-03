"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Get all project tiles
  var projectTiles = document.querySelectorAll(".project-tile");

  // Add click event listeners to project tiles
  projectTiles.forEach(function (tile) {
    tile.addEventListener("click", function () {
      // Get the corresponding lightbox ID
      var lightboxId = "lightbox" + tile.id.substr(7);

      // Show the lightbox
      var lightbox = document.getElementById(lightboxId);
      lightbox.style.display = "block";

      // Hide the lightbox when clicked outside
      lightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
      });
    });
  });

  // Get all the photo-tile elements
  var photoTiles = document.querySelectorAll('.photo-tile');

  // Get the overlay and enlarged image elements
  var overlay = document.getElementById('overlay');
  var enlargedImage = document.getElementById('enlarged-image');

  // Add a click event listener to each photo tile
  photoTiles.forEach(function (photoTile) {
    photoTile.addEventListener('click', function () {
      var imageSrc = photoTile.querySelector('img').src;
      enlargedImage.src = imageSrc;
      overlay.style.display = 'block';
    });
  });

  // Add a click event listener to the overlay to close it
  overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
  });
});
