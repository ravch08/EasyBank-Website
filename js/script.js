"use strict";

const header = document.querySelector('header');
const bannerSection = document.querySelector('.banner');

let options = {
    // root: document.querySelector('#scrollArea'), [default is viewport]
    rootMargin: '-300px 0px 0px 0px',
    // threshold: 1.0
}

let bannerObserver = new IntersectionObserver(function (entries) {

    entries.forEach(entry => {
        // console.log(entry.target);

        if (!entry.isIntersecting) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }


    });
}, options);

bannerObserver.observe(bannerSection);