//To expand and close the menu bar
$(document).ready(function(){
  $('.nav-bar__icon').click(function(){
    $('.nav-bar__icon').toggleClass('active');
    $('.nav-bar__menu-bar').toggleClass('active');
  })
});


// To close the nav bar after clicking on the links
$(document).ready(function () {
  $(".link-click").click(function() {
  	$('.nav-bar__icon').removeClass('active');
    $('.nav-bar__menu-bar').removeClass('active');
   });
});