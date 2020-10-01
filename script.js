// gsap.to('.mask img', {
//     scrollTrigger: {
//         scrub: 1.5,
//         start: "top top",
//     },
//     yPrecent: -100

// })

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    delay: .6,
    transition: 'cubic-bezier(0,0,0,1)',
    scale: 1.5
});

$(function() {
    var $diaplay = $('#display'),
        counter = 0;
    $('.marquee')
        .bind('beforeStarting', function() {
            $diaplay.show().html('started').delay(1000).fadeOut('fast');
        })
        .bind('finished', function() {
            counter++;
            $diaplay.show().html('finished ' + counter + ' times').delay(1000).fadeOut('fast');
        })
        //Apply plugin
        .marquee({
            duration: 3000
        })
});