/* Sticky Sidebar ======================== */

// If the distance we've scrolled is greater than stickyNavOffset,
// // Add the scrolled class to the .sidebar
// // Else remove the scrolled class from .sidebar

var stickyNavOffset = $('.sidebar').offset().top
// console.log('Sticky nav offset is: ' + stickyNavOffset)

$(window).on('scroll', function() {
// console.log('Distance scrolled: ' + $(window).scrollTop())
if ($(window).scrollTop() > stickyNavOffset) {
	$('.sidebar').addClass('scrolled');
} else {
	$('.sidebar').removeClass('scrolled');
}
});

/* View Options ======================== */

$(document).ready(function(){

	$("#four").click(function(){
		$(".page").addClass("gridTile");
		$("#four").addClass("black");
		$("#one").removeClass("black");
	});
	$("#one").click(function(){
		$(".page").removeClass("gridTile");
		$("#four").removeClass("black");
		$("#one").addClass("black");
	});

});

/* Hide View Until Section 2 ======================== */

$(window).scroll(function(){
	if ($(this).scrollTop() > 700) {
		$('#views').fadeIn();
	} else {
		$('#views').fadeOut();
	}
});

/* Snap Back ======================== */

$(window).scroll(function(){
	if ($(this).scrollTop() > 400) {
		$('.scrollUp').fadeIn();
	} else {
		$('.scrollUp').fadeOut();
	}
});

$('.scrollUp').hover(function(){
	$('html, body').animate({scrollTop : 0},800);
	return false;
});

$(window).scroll(function(){
	if ($(this).scrollTop() > 400) {
		$('.scrollUp').fadeIn();
	} else {
		$('.scrollUp').fadeOut();
	}
});

$('.scrollUp').click(function(){
	$('html, body').animate({scrollTop : 0},800);
	return false;
});
