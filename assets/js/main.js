$(document).ready(function(){
    $(".slider-area").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: false,
        dots: true,
    });
});
document.querySelector('.shop-now-button').addEventListener('click', function () {
    window.location.href = 'sales.html'; 
});