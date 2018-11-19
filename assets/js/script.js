$(document).ready(function() {

  /**For fade effect when you click.*/
  $('body').hide();
  $('body').stop().fadeTo(1000, 1);

  /**For changing the color of the header**/
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
  	var divTop = $(".work-information").offset().top;

  	if (scroll > 1) {
  		$(".navigation").css("background-color" , "#333");
 	  	$(".navigation-text").css("color" , "white");
  	} else {
	  	$(".navigation").css("background-color" , "");
	  	$(".navigation-text").css("color" , "white");
	  }
  })

  /**Hover function for the navbar. Not css cause it conflicts with page fadeIn opacity.*/
 $("li a").hover(function(){
  $(this).stop().animate({opacity: "0.5"})},
  function() {
  $(this).stop().animate({opacity: "1"});
 });

})