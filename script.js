// JavaScript to handle the scroll progress bar
$(document).ready(function() {
    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        $('#progressBar div').css('width', scrollPercent + '%');
    });
});

window.addEventListener('load', function () {
    // Hide the preloader after page load
    document.getElementById('preloader').style.display = 'none';
});