document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.mobile-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
 
});


(function($) {
  $(function() {
  

    //Init Slider

    $(".slider").slider({
      fullWidth: true,
      indicators: false,
      height: 500
    });

    //Init Scrollspy
    $(".scrollspy").scrollSpy({});
  }); // end of document ready
})(jQuery); // end of jQuery name space

