console.log("Sularis Studio site loaded");

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

const images = [
  "../images/gallery1.jpg",
  "../images/gallery2.jpg",
  "../images/gallery3.jpg",
  "../images/gallery4.jpg"
];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;

  document.getElementById("lightbox").classList.add("show");
  document.getElementById("lightbox-img").src = images[index];
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("show");
}

function changeSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  document.getElementById("lightbox-img").src = images[currentIndex];
}
