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

 $(document).ready(function(){
      $(window).scroll(function(){
        if ($(this).scrollTop() > 0) {
            $("header").addClass('.change');
          } else {
            $("header").removeClass('.change');
          }
      });
  });