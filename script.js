// Scripti algus
setTimeout(function() { activateSlider1(); }, 1000)
setTimeout(function() { activateSlider2(); }, 1000)
//import { loadSaadaval } from './saadaval.js'
//loadSaadaval()
//import { loadSoovitakse } from './soovitakse.js'
//loadSoovitakse()
function activateSlider1() {

    const slider1 = tns({
        container: ".my-slider1",
        items: 3,
        gutter: 20,
        slideBy: 1,
        controlsPosition: "bottom",
        navPosition: "bottom",
        mouseDrag: true,
        autoplay: true,
        autoplayButtonOutput: false,
        controlsContainer: "#custom-control1",
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: true
            },
            1440: {
                items: 3
            }
        }
        // mode: 'gallery',
        // speed: 2000,
        // animateIn: "scale",
        // controls: false,
        // nav: false,
        // edgePadding: 20,
        // loop: false,
    });
}
function activateSlider2() {

    const slider1 = tns({
        container: ".my-slider2",
        items: 3,
        gutter: 20,
        slideBy: 1,
        controlsPosition: "bottom",
        navPosition: "bottom",
        mouseDrag: true,
        autoplay: true,
        autoplayButtonOutput: false,
        controlsContainer: "#custom-control2",
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: true
            },
            1440: {
                items: 3
            }
        }
        // mode: 'gallery',
        // speed: 2000,
        // animateIn: "scale",
        // controls: false,
        // nav: false,
        // edgePadding: 20,
        // loop: false,
    });
}