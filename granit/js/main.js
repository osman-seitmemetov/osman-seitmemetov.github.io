// Slider
let swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 5000,
    },
});

// Map
var map = L.map('map', {
    center: [17.385044, 78.486671],
    zoom: 10
});

var marker = L.marker([17.385044, 78.486671]).addTo(map);

let myFilter = [
    'grayscale:100%',
    'invert:100%',
];

let myTileLayer = L.tileLayer.colorFilter('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
    filter: myFilter,
}).addTo(map);

// Burger menu
const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
}