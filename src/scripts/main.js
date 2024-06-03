document.addEventListener('DOMContentLoaded', function() {
    const heroHeight = document.querySelector('.hero').clientHeight;
    const button = document.querySelector('.hero__sinopsis__button');
    let videoStarted = false;

    window.addEventListener('scroll', function() {
        const position = window.scrollY;
        const video = document.getElementById('video');

    // video autoplay
        function play() {
            video.src += '&autoplay=1';
        }

        if (position >= 500 && !videoStarted) {
            play();
            videoStarted = true;
        }

    // hide header with scroll
        if (position > heroHeight) {
            hideHeader();
        } else {
            showHeader();
        }
    });

    // toggle sinopsis button
    button.addEventListener('click', openClose);
});

    // extra functions
function hideHeader() {
    const header = document.querySelector('.header');
    header.classList.add('header--hidden');
}

function showHeader() {
    const header = document.querySelector('.header');
    header.classList.remove('header--hidden');
}

function openClose() {
    const sinopsis = document.querySelector('.hero__sinopsis');
    const toggleClass = 'hero__sinopsis--is-open';
    sinopsis.classList.toggle(toggleClass);
}