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


// var amount = '';

// function scroll() {
//     $('#gallery_container').animate({
//         scrollTop: amount
//     }, 100, 'linear',function() {
//         if (amount != '') {
//             scroll();
//         }
//     });
// }
// $('#up').hover(function() {
//     amount = '+=30';
//     scroll();
// }, function() {
//     amount = '';
// });
// $('#down').hover(function() {
//     amount = '-=30';
//     scroll();
// }, function() {
//     amount = '';
// });

