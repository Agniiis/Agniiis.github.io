// Slideshow bildes
const images = [
  "assets/images/slideshow/raikonen.jpg",
  "assets/images/slideshow/hamilton.jpg",
  "assets/images/slideshow/rosberg.jpg"
];

// Mainīgais, kas glabā pašreizējās bildes indeksu
let currentImageIndex = 0;

// Slideshow intervāls
const slideshowInterval = 5000; // 5 sekundes

// Funkcija, kas parāda nakamo bildi
function showNextImage() {
  const image = document.getElementById("slideshow-image");
  if (!image) return; // Ja nav slideshow image elementa, tad iziet no funkcijas
  image.src = images[currentImageIndex];
  // Palielina indeksu par 1. Ja tas ir lielāks par bilžu skaitu, tad atgriežas pie 0
  currentImageIndex = (currentImageIndex + 1) % images.length;
  setTimeout(showNextImage, slideshowInterval);
}

// Funkcija, kas pielāgo showreel video skaņas līmeni
function initVideo() {
  const video = document.querySelector('.showreel video');
  if (!video) return; // Ja nav video elementa, tad iziet no funkcijas
  video.volume = 0.5; // 50%
}

// Mainīgais, kas glabā mobilās izvēlnes atvēršanas stāvokli
let mobileMenuOpen = false;

// Funkcija, kas inicializē mobilo izvēlni
function initMobileMenu() {
  const menuButton = document.getElementById("hamburger");
  menuButton.addEventListener("click", toggleMobileMenu);
}

// Funkcija, kas atver mobilo izvēlni
function openMobileMenu() {
  if (mobileMenuOpen) return; // Ja izvēlne jau ir atvērta, tad iziet no funkcijas
  mobileMenuOpen = true;
  const nav = document.getElementById("nav-items");
  nav.classList.add("open");
}

// Funkcija, kas aizver mobilo izvēlni
function closeMobileMenu() {
  if (!mobileMenuOpen) return; // Ja izvēlne jau ir aizvērta, tad iziet no funkcijas
  mobileMenuOpen = false;
  const nav = document.getElementById("nav-items");
  nav.classList.remove("open");
}

// Funkcija, kas atver/aizver mobilo izvēlni
function toggleMobileMenu(event) {
  event.preventDefault();
  if (mobileMenuOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

// Izsauc funkcijas uzreiz uz lapas ielādes
document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
  showNextImage();
  initVideo();
});
