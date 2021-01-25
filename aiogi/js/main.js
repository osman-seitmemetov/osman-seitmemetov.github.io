// Menu with magic-line
$(document).ready(function() {

    // var
    var $nav = $('.tabs'),
        $line = $('<div>').appendTo($nav),
        $activeLi,
        lineWidth,
        liPos;

    function refresh() {
        $activeLi = $nav.find('div.tab--active');
        lineWidth = $activeLi.outerWidth();
        liPos = $activeLi.position().left;
    }

    refresh();

    $nav.css('position','relative');

    // line setup
    function lineSet() {
        $line.css({
            'position':'absolute',
            'background-color':'#282828',
            'bottom':'-1px',
            'height':'2px',
        }).animate({
            'left': liPos,
            'width': lineWidth,
        }, 200);
    }

    lineSet();

    // on click
    $nav.find('div.tab').on('click', function() {
        $activeLi.removeClass('tab--active');
        $(this).addClass('tab--active');
        refresh();
        lineSet();
    });
}); //end ready


// PRELOADER
document.body.onload = function() {
    setTimeout(function() {
        let preloader = document.querySelector('#page-preloader');
        if(!preloader.classList.contains('done')) {
            preloader.classList.add('done');
            setTimeout( () => {
                preloader.classList.add('done-2');
            }, 200)
       }
    }, 1000);
}


//
const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');
const menuBlackBg = document.querySelector('.black-bg');
const body = document.querySelector('body');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
    menuBlackBg.classList.toggle('black-bg--active');
    body.classList.toggle('body--active');
});



var snapper = new Snap({
    element: document.getElementById('content'),
    dragger: document.getElementById('content'),
    hyperextensible: false,
    maxPosition: 320,
    minPosition: -320,
    disable: 'right',
    transitionSpeed: 0.3
});

snapper.on('open', function(){
    menuToggle.classList.add('menu-icon-active');
    menuBlackBg.classList.add('black-bg--active');
    body.classList.add('body--overflow-hidden');
});

snapper.on('end', function(){
    menuToggle.classList.remove('menu-icon-active');
    menuBlackBg.classList.remove('black-bg-active');
    body.classList.remove('body--overflow-hidden');
});


document.addEventListener('click', (event) => {
    if( event.target.closest('.menu-icon') ||
    event.target.classList.contains('black-bg--active')) {
        menuToggle.classList.remove('menu-icon-active');
        mobileNavContainer.classList.remove('mobile-nav--active');
        menuBlackBg.classList.remove('black-bg--active');
        // body.classList.remove('body--active');
    }
});


// videojs('my-video', {
//     controls: true,
//     autoplay: false,
//     preload: 'auto',
//     playbackRates: [
//         0.25,
//         0.5,
//         1,
//         1.5,
//         2,
//     ],
//     plugins: {
//         hotkeys: {
//             seekStep: 5,
//         },
//         hlsQualitySelector: {
//             displayCurrentQuality: true,
//         },
//     },

//     html5: {
//         hlsjsConfig: {
//             debug: true
//         }
//     }
// });

// videojs('my-video').playlist([
//     {sources: [{
//         src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
//         type: 'video/mp4'
//     }],
//     poster: 'http://media.w3.org/2010/05/sintel/poster.png'
//     },

//     {
//     sources: [{
//       src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
//       type: 'video/mp4'
//     }],
//     poster: 'http://media.w3.org/2010/05/bunny/poster.png'
//     }, 
  
//     {
//     sources: [{
//       src: 'http://vjs.zencdn.net/v/oceans.mp4',
//       type: 'video/mp4'
//     }],
//     poster: 'http://www.videojs.com/img/poster.jpg'
//     }, 
  
//     {
//     sources: [{
//       src: 'http://media.w3.org/2010/05/bunny/movie.mp4',
//       type: 'video/mp4'
//     }],
//     poster: 'http://media.w3.org/2010/05/bunny/poster.png'
//     }, 
  
//     {
//     sources: [{
//       src: 'http://media.w3.org/2010/05/video/movie_300.mp4',
//       type: 'video/mp4'
//     }],
//     poster: 'http://media.w3.org/2010/05/video/poster.png'
// }]);

// // Play through the playlist automatically.
// videojs('my-video').playlist.autoadvance(0);

// // Initialize the plugin and build the playlist!
// // videojs('my-video').playlistUi();





// Menu dropdown
const menuLink = document.querySelectorAll('.menu-left__link--drop');
// const menuBlackBg = document.querySelector('.black-bg');
const menuLinkDropdown = document.querySelector('.menu-left__link-dropdown');

menuLink.forEach((el) => {
    el.addEventListener('mouseover', (event) => {
        event.stopPropagation();
        // menuBlackBg.style.display = 'flex';
        // menuLinkDropdown.style.display = 'flex';
        // menuBlackBg.classList.remove('black-bg--inactive');
        // menuLinkDropdown.classList.remove('menu-left__link-dropdown--inactive');
        menuBlackBg.classList.add('black-bg--active');
        menuLinkDropdown.classList.add('menu-left__link-dropdown--active');
    });

    el.addEventListener('mouseleave', (event) => {
        event.stopPropagation()
        menuBlackBg.classList.remove('black-bg--active');
        menuLinkDropdown.classList.remove('menu-left__link-dropdown--active');
        // menuBlackBg.classList.add('black-bg--inactive');
        // menuLinkDropdown.classList.add('menu-left__link-dropdown--inactive');
        // setTimeout( () => {
        //     menuBlackBg.style.display = 'none';
        //     menuLinkDropdown.style.display = 'none';
        // }, );
    });
});


// Sidebar dropdown
const sidebarDropdown = document.querySelectorAll('.sidebar__dropdown');
// const sidebarDropdownTitle = document.querySelectorAll('.sidebar__dropdown-title');
// const sidebarDropdownContent = document.querySelectorAll('.sidebar__dropdown-content');

sidebarDropdown.forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('sidebar__dropdown--active');
    });
});


// Modals
const modal = document.querySelector('.modal');
const modalWrapper = document.querySelector('.modal-wrapper');
const modalCloseButton = document.querySelector('.modal__close');
const modalClick = document.querySelector('.search');
const modalBg = document.querySelector('.modal-bg');
const modalInput = document.querySelector('.modal__form-input');
const modalInputButton = document.querySelector('.modal__form-input-button');

modalClick.addEventListener('click', () => {
    modalBg.classList.add('modal-bg--active');
    modalWrapper.classList.add('modal-wrapper--active');
    modal.classList.add('modal--active');
});

modalWrapper.addEventListener('click', (event) => {
    if(event.target.closest('.modal__close') ||
    event.target.classList.contains('modal-wrapper__inner')) {
        modalBg.classList.remove('modal-bg--active');
        modalWrapper.classList.remove('modal-wrapper--active');
        modal.classList.remove('modal--active');
    }
});

// modalInputButton.addEventListener('click', () => {
//     if(modalInput.getAttribute('type') === 'password') {
//         modalInput.setAttribute('type', 'text');
//         modalInput.type = 'text';
//     } else {
//         modalInput.setAttribute('type', 'password');
//         modalInput.type = 'password';
//     }
// });


// Sliders
const mainCarousel = new Swiper('.hero', {
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 5000,
    },
});

var swiper = new Swiper('.instructors__slider', {
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: {
        nextEl: '.instructors__slider-button-next',
        prevEl: '.instructors__slider-button-prev',
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 1,
        },

        468: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        924: {
            slidesPerView: 4,
            spaceBetween: 48,
        }
    }
});

const mainSlider = new Swiper('.main-slider', {
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.main-slider__pagination',
        clickable: true,
    },
});

const sliderLesson = new Swiper('.lesson-slider', {
    spaceBetween: 48,
    slidesPerView: 3,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// Deploy/hidden
const deployButton = document.querySelector('.instructor-account__data-btn');
const deployText = document.querySelector('.instructor-account__data-desc');
const deployGradient = document.querySelector('.instructor-account__data-desc-gradient');

if(deployButton) {
    deployButton.addEventListener('click', () => {
        if(deployText.classList.contains('instructor-account__data-desc--active')) {
            deployText.classList.remove('instructor-account__data-desc--active');
            deployGradient.classList.remove('instructor-account__data-desc-gradient--disabled');
            deployButton.innerHTML = "Развернуть";
        } else {
            deployText.classList.add('instructor-account__data-desc--active');
            deployGradient.classList.add('instructor-account__data-desc-gradient--disabled');
            deployButton.innerHTML = "Свернуть";
        }
    });
}


// Range
const slider = document.getElementById('slider');

if(slider) {
    noUiSlider.create(slider, {
        start: [
            15,
            60,
        ],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        },
        tooltips: true,
        step: 1,
        format: {
            to: function (value) {
                return value + '';
            },
            from: function (value) {
                return Number(value.replace('', ''));
            }
        }
    });
}