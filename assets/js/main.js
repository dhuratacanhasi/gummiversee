$(document).ready(function(){
    $(".slider-area").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: false,
        dots: true,
    });
});
document.querySelectorAll('.shop-now-button').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'sales.html'; // Redirect to sales.html
    });
});