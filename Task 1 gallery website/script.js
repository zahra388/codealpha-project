// ===== FILTER FUNCTION =====
function filterSelection(category) {
  const items = document.getElementsByClassName("gallery-item");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}

// ===== LIGHTBOX FUNCTIONALITY =====
let currentIndex = 0;
let images = [];

document.addEventListener("DOMContentLoaded", () => {
  images = Array.from(document.querySelectorAll(".gallery-item img"));
  
  images.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
  });
});

function openLightbox(index) {
  currentIndex = index;
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("caption");

  lightbox.style.display = "block";
  lightboxImg.src = images[index].src;
  caption.textContent = images[index].alt;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeSlide(n) {
  currentIndex += n;
  if (currentIndex >= images.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = images.length - 1;

  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("caption");
  lightboxImg.src = images[currentIndex].src;
  caption.textContent = images[currentIndex].alt;
}

// Optional: close lightbox when clicking outside image
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") closeLightbox();
});
