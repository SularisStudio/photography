console.log("Sularis Studio site loaded");

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

let currentIndex = 0;
let galleryImages = [];

// run once after page loads
window.addEventListener("DOMContentLoaded", () => {
  const allImages = document.querySelectorAll(".gallery-item img");
  galleryImages = Array.from(allImages).map(img => img.dataset.full);
});

function openLightbox(imgElement) {
  currentIndex = galleryImages.indexOf(imgElement.dataset.full);

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
