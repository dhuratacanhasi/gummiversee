$(document).ready(function(){
    $(".slider-area").owlCarousel(
        {
            items: 1,
            loop: true,
            autoplay: true,
            nav:false,
            dots:true,
        }
    );
  });
  // Select all buttons with the class 'shop-now-button'
document.querySelectorAll('.shop-now-button').forEach(function(button) {
    button.addEventListener('click', function() {
        // Open a new blank page when any button is clicked
        window.open("shopnow.html", "_blank");
    });
});
