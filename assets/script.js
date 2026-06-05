console.log("Sularis Studio site loaded");

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

let currentIndex = 0;
let galleryImages = [];

function openLightbox(imgElement) {
  const allImages = document.querySelectorAll(".gallery-item img");

  // build array of full-size images from data-full
  galleryImages = Array.from(allImages).map(img => img.dataset.full);

  // find clicked image index
  currentIndex = galleryImages.indexOf(imgElement.dataset.full);

  // open lightbox + set image
  document.getElementById("lightbox").classList.add("show");
  document.getElementById("lightbox-img").src = imgElement.dataset.full;
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("show");
}

function changeSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = galleryImages.length - 1;
  }

  if (currentIndex >= galleryImages.length) {
    currentIndex = 0;
  }

  document.getElementById("lightbox-img").src = galleryImages[currentIndex];
}
