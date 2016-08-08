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
		$('.gallery_two').html('<img src="images/PhotoDoll.jpg" alt="" class="doll"><img src="images/PhotorebeccaVertical.jpg" alt=""><img src="images/PhotoTree copy.jpg" alt="">');
		$('.gallery_two').addClass('viewThreeMid');
		$('.gallery_one').html('<img src="images/PhotoTwoLegs.jpg" alt=""><img src="images/PhotoBlueBuilding.jpg" alt="" class="blueBuilding"><img src="images/PhotoPink.jpg" alt=""><img src="images/PhotoRebeccaEdit.jpg" alt="">');
		$('.gallery_one').addClass('viewThreeLarge');
		$('.gallery_three').removeClass('hide');
		$('.gallery_three').html('<img src="images/PhotoBuildings.jpg" alt=""><img src="images/PhotoKevin.jpg" alt=""><img src="images/PhotoLegs.jpg" alt=""><img src="images/PhotoPortrait.jpg" alt="">');
		$('.gallery_three').addClass('viewThree gallery_three img gallery_three img:hover');
});	


	$("#grid").click(function(){
		$("#grid").removeClass("grey");
		$("#grid").addClass("black");
		$("#collage").addClass("grey");
		$('.gallery_two').removeClass('viewThreeMid');
		$('.gallery_two').html('<img src="images/PhotoDoll.jpg" alt="" class="doll"><img src="images/PhotoLegs.jpg" alt=""><img src="images/PhotoKevin.jpg" alt=""><img src="images/PhotorebeccaVertical.jpg" alt=""><img src="images/PhotoPortrait.jpg" alt="">');
		$('.gallery_one').removeClass('viewThreeLarge');
		$('.gallery_one').html('<img src="images/PhotoTwoLegs.jpg" alt=""><img src="images/PhotoBlueBuilding.jpg" alt="" class="blueBuilding"><img src="images/PhotoRebeccaEdit.jpg" alt=""><img src="images/PhotoBuildings.jpg" alt=""><img src="images/PhotoPink.jpg" alt=""><img src="images/PhotoTree copy.jpg" alt="">');
		$('.gallery_three').empty();	

});

});

/* Hover Descriptions ======================== */

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
