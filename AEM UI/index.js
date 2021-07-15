//Move up button

$(document).ready(function(){

    $nav=$('.nav')
    $toogleCollapse=$('.toogle-collapse');

    $toogleCollapse.click(function(){
        $nav.$toogleCollapse('.collapse');

    })

    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

});

// Scroll reveal
window.sr= ScrollReveal();

sr.reveal('.animate-left', {
    origin:'left',
    duration:1000,
    distance: '55rem',
    delay:600

});

window.sr= ScrollReveal();

sr.reveal('.animate-right', {
    origin:'right',
    duration:1000,
    distance: '55rem',
    delay:1200

});

window.sr= ScrollReveal();

sr.reveal('.animate-top', {
    origin:'top',
    duration:1000,
    distance: '25rem',
    delay:1200

});


window.sr= ScrollReveal();

sr.reveal('.animate-bottom', {
    origin:'bottom',
    duration:1000,
    distance: '25rem',
    delay:1200

});

