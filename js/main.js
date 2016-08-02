/* Sticky Sidebar ======================== */

// If the distance we've scrolled is greater than stickyNavOffset,
// // Add the scrolled class to the .sidebar
// // Else remove the scrolled class from .sidebar

var stickyNavOffset = $('.sidebar').offset().top
console.log('Sticky nav offset is: ' + stickyNavOffset)

$(window).on('scroll', function() {
console.log('Distance scrolled: ' + $(window).scrollTop())
	if ($(window).scrollTop() > stickyNavOffset) {
    $('.sidebar').addClass('scrolled');
    } else {
    $('.sidebar').removeClass('scrolled');
    }
});

/* View Options ======================== */

// If click .one add class #view-option 
// Remove class #view-option from .four 

$('.one').on('click', function () {
	$('.one').addClass('view-option');
	$('.one').find('p').addClass('view-option');
	$('.four').removeClass('view-option');
	$('.four').find('p').removeClass('view-option');
});

// If click .four add class #view-option 
// Remove class #view-option from .one 

$('.four').on('click', function () {
	$('.one').removeClass('view-option');
	$('.one').find('p').removeClass('view-option');
	$('.four').addClass('view-option');
	$('.four').find('p').addClass('view-option');
});

// If click .four add class #second-image-view to #second-image
// If click .four add class #third-image-view to #third-image

$('.four').on('click', function () {
	$('.second-image').addClass('second-image-view');
	$('.third-image').addClass('third-image-view');
	$('.fourth-image').addClass('fourth-image-view');
	$('.fifth-image').addClass('fifth-image-view');
});

$('.one').on('click', function () {
	$('.second-image').removeClass('second-image-view');
	$('.third-image').removeClass('third-image-view');
	$('.fourth-image').removeClass('fourth-image-view');
	$('.fifth-image').removeClass('fifth-image-view');
});

/* Sticky View Option ======================== */

// var stickyView = $('.view').offset().top
// console.log('Sticky nav offset is: ' + stickyView)

// $(window).on('scroll', function() {
// console.log('Distance scrolled: ' + $(window).scrollTop())
// 	if ($(window).scrollTop() > stickyView) {
//     $('.view').addClass('scrolled');
//     } else {
//     $('.view').removeClass('scrolled');
//     }
// });