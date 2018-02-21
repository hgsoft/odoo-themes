$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar-fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
          
          if($(this).scrollTop() > $nav.height()) {
            $('.NavigationButton').addClass('menu_black');
            $('.NavigationButton').removeClass('menu_white');
            }
        else {
            $('.NavigationButton').removeClass('menu_black');
            $('.NavigationButton').addClass('menu_white');
            }
          
                });
});

$(document).ready(function(){
	$(window).scroll(function(){
  	var light_pos = $('#white_div').offset().top;
    var light_height = $('#white_div').height();
    var menu_pos = $('.NavigationButton').offset().top;
    var menu_height = $('.NavigationButton').height();
    var scroll = $(window).scrollTop();
    console.log('light',light_pos);
    console.log('menu',menu_pos);
    console.log('scroll',scroll);
    
    if(menu_pos > light_pos && menu_pos < (light_pos + light_height)) {
    	$('.NavigationButton').addClass('menu_black');
      $('.NavigationButton').removeClass('menu_white');
    }
    else {
    	$('.NavigationButton').removeClass('menu_black');
      $('.NavigationButton').addClass('menu_white');
    }
    
  })
})