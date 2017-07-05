$ = jQuery;

$(document).ready(function(){
  alert('Hola');
 $('.scroll-btn > a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

});