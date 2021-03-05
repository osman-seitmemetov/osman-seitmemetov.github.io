// fullpage
new fullpage('#fullpage', {
	autoScrolling: true,
    scrollHorizontally: true,
    scrollingSpeed: 800,
    responsiveWidth: 992,
    responsiveHeight: 600,
});

window.onscroll = () => {
    var header = document.querySelector('.header');

    if(window.pageYOffset > 350) {
        header.classList.add('header--fixed');
    } else {
        header.classList.remove('header--fixed');
    }
}