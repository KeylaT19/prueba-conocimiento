$('.slider').slick(
    {
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: false,
        dots:true,

    }
);

// SCROLL AL HEADER 
/*  $(function() {
    var elemento = document.getElementById("header");
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
        elemento.classList.add('change');
      } else {
        elemento.classList.remove('change');
      }
    })
  });  */

/*  $(document).ready(function(){
      $(window).scroll(function(){
        if ($(this).scrollTop() > 0) {
            $("header").addClass('.change');
          } else {
            $("header").removeClass('.change');
          }
      });
  }); */
/*   $(document).ready(function () {
    var scroll_pos = 0;
    $("#left-panel").scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 200) {
            $("#left-panel").css('background-color', 'transparent'); //*Transparente
        } else {
            $("#left-panel").css('background-color', 'white'); //*blanco
        }          
    });
}); */
 // grid
 var $grid = $('.grid4').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  stagger: 30,
  columnWidth: '.grid-sizer'
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});

