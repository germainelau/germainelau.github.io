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
		$(".doll").addClass('dollClass collage');
		$(".kevin").addClass('kevinClass collage');
		$(".legs").addClass('legsClass collage');
		$(".twoLegs").addClass('twoLegsClass collage');
		$(".blueBuilding").addClass('blueBuildingClass collage');
		$(".rebecca").addClass('rebeccaClass collage');
		$(".portrait").addClass('portraitClass collage');
		$(".rebeccaVertical").addClass('rebeccaVerticalClass collage');
		$(".tree").addClass('treeClass collage');
		$(".pink").addClass('pinkClass collage');
		$(".buildings").addClass('buildingsClass collage');
	});

	$("#grid").click(function(){
		$("#grid").removeClass("grey");
		$("#grid").addClass("black");
		$("#collage").addClass("grey");
$(".doll").removeClass('dollClass collage');
		$(".kevin").removeClass('kevinClass collage');
		$(".legs").removeClass('legsClass collage');
		$(".twoLegs").removeClass('twoLegsClass collage');
		$(".blueBuilding").removeClass('blueBuildingClass collage');
		$(".rebecca").removeClass('rebeccaClass collage');
		$(".portrait").removeClass('portraitClass collage');
		$(".rebeccaVertical").removeClass('rebeccaVerticalClass collage');
		$(".tree").removeClass('treeClass collage');
		$(".pink").removeClass('pinkClass collage');
		$(".buildings").removeClass('buildingsClass collage');

	});

/* Hover Descriptions ======================== */

$(".doll").on('mouseenter',function(){
	$('article').html('<div class="type"> <h3> Type: </h3><p>Photography</p></div><div class="dateEdit"><h3>View:</h3><span id="grid"> <i class="fa fa-th-large" aria-hidden="true"></i></span><span id="slashEdit">/</span><span id="collage"> <i class="fa fa-th" aria-hidden="true"></i></span> </div><div class="description text"><h3>Description:</h3><p>Floating doll head</p></div>');
	$('article').hide();
	$('article').fadeIn(700);
});

$(".doll").on('mouseleave',function(){
	$('article').html('<div class="type"> <h3> Type: </h3><p>Photography</p></div><div class="dateEdit"><h3>View:</h3><span id="grid"> <i class="fa fa-th-large" aria-hidden="true"></i></span><span id="slashEdit">/</span><span id="collage"> <i class="fa fa-th" aria-hidden="true"></i></span> </div><div class="description text"><h3>Description:</h3><p>From doll heads to skyscrapers&mdash; a collection of photos taken since 2015.</p></div>');
	$('article').hide();
	$('article').fadeIn(700);
});
