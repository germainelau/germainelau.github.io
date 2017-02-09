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

/* Sticky Sidebar ======================== */

$('.title').hover(function(){
	$('.sidebar').addClass('active');

});

$('.sidebar').on('click', function () {
	$('.sidebar').removeClass('active');
});

$('.close').on('click', function () {
	$('.sidebar').removeClass('active');
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
	if ($(this).scrollTop() > 580) {
		$('#views').fadeIn();
	} else {
		$('#views').fadeOut();
	}
});

/* Snap Back ======================== */

$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
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
	if ($(this).scrollTop() > 300) {
		$('.HomeScrollUp').fadeIn();
	} else {
		$('.HomeScrollUp').fadeOut();
	}
});

$('.HomeScrollUp').hover(function(){
	$('html, body').animate({scrollTop : 0},800);
	return false;
});

/* Collage ======================== */

$(document).ready(function(){

	$("#collage").click(function(){
		$("#collage").removeClass("grey")
		$("#collage").addClass("black")
		$("#grid").addClass("grey");
		$('.gallery_one').addClass('viewThreeLarge');
		$('.gallery_one').find('.remove').addClass('display');
		$('.gallery_two').find('.remove').addClass('display');
		$('.gallery_two').addClass('viewThreeMid');
		$('.gallery_three').addClass('viewThree');
});	


	$("#grid").click(function(){
		$("#grid").removeClass("grey");
		$("#grid").addClass("black");
		$("#collage").addClass("grey");
		$('.gallery_one').removeClass('viewThreeLarge');
		$('.gallery_two').removeClass('viewThreeMid');
		$('.gallery_three').removeClass('viewThree');
				$('.gallery_one').find('.remove').removeClass('display');
		$('.gallery_two').find('.remove').removeClass('display');

});

});

/* Hover Descriptions ======================== */

$(".photoTwoLegs").on('mouseenter',function(){
	$('.description').find('p').html('<p>Toilet paper, 2015</p>');

});

$(".photoTwoLegs").on('mouseleave',function(){
	$('.description').find('p').html('<p>From legs to skyscrapers&mdash; a collection of photos. </p>');

});

$(".blueBuilding").on('mouseenter',function(){
	$('.description').find('p').html('<p>Financial district, 2016</p>');

});

$(".blueBuilding").on('mouseleave',function(){
	$('.description').find('p').html('<p>From legs to skyscrapers&mdash; a collection of photos. </p>');

});


$(".doll").on('mouseenter',function(){
	$('.description').find('p').html('<p>Floating doll head, 2015</p>');

});

$(".doll").on('mouseleave',function(){
	$('.description').find('p').find('p').html('<p>From legs to skyscrapers&mdash; a collection of photos. </p>');

});

$(".denmark").on('mouseenter',function(){
	$('.description').find('p').html('<p>Kronborg, 2015</p>');

});

$(".denmark").on('mouseleave',function(){
	$('.description').find('p').html('<p>From legs to skyscrapers&mdash; a collection of photos. </p>');

});

$(".kevin").on('mouseenter',function(){
	$('.description').find('p').html('<p><i>Oh, the horror</i>, 2015</p>');

});

$(".kevin").on('mouseleave',function(){
	$('.description').find('p').html('<p>From legs to skyscrapers&mdash; a collection of photos. </p>');

});

$(".rebecca").on('mouseenter',function(){
	$('.description').find('p').html('<p>Melancholy clown, 2015</p>');

});

$(".rebecca").on('mouseleave',function(){
	$('.description').find('p').html('<p>From legs to skyscrapers&mdash; a collection of photos. </p>');

});

$(".pink").on('mouseenter',function(){
	$('.description').find('p').html('<p>Van accessible, 2016</p>');

});

$(".pink").on('mouseleave',function(){
	$('.description').find('p').html('<p>From legs to skyscrapers&mdash; a collection of photos. </p>');

});

$(".polariz").on('mouseenter',function(){
	$('.description').find('p').html('<p>The everyday Keanu Reeves, 2016</p>');

});

$(".polariz").on('mouseleave',function(){
	$('.description').find('p').html('<p>From legs to skyscrapers&mdash; a collection of photos. </p>');

});

$(".tree").on('mouseenter',function(){
	$('.description').find('p').html('<p>Curling iron, 2016</p>');

});

$(".tree").on('mouseleave',function(){
	$('.description').find('p').html('<p>From legs to skyscrapers&mdash; a collection of photos. </p>');

});

$(".portrait").on('mouseenter',function(){
	$('.description').find('p').html('<p>Portrait, 2016</p>');

});

$(".portrait").on('mouseleave',function(){
	$('.description').find('p').html('<p>From legs to skyscrapers&mdash; a collection of photos. </p>');

});


