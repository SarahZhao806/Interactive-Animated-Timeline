/*  JavaScript Document                      */



var timelineWidth = 0;
var panelWidth = 0;
var firstRun = true;
var totalPanels = 0;
var currentPanel = 0;

$(document).ready(function() {
   panelWidth = $('.timeline .panel').width(); 
   timelineWidth = $('.timeline').width();
   totalPanels = $('.timeline .panel').length;
   adjustLayout();
});

function adjustLayout() {
    $('.timeline .panel').each(function(index) {
        var newX = panelWidth * index;
        $(this).css('left', newX + 'px');
        
        var newLabel = $(this).find('.label').html();
        $('.timeline nav').append('<a href="#">' + newLabel + '</a>');
    });
    
    currentPanel = $('timeline nav a:last-child()').index();
    activateNavigation();
}

function activateNavigation() {
    $('.timeline nav a').on(
        'click', function() {
            currentPanel = $(this).index();
            
            $('.timeline nav a').removeClass('selected');
            $(this).addClass('selected');
            
            var timelineOffset = (timelineWidth - panelWidth) * .5;
            var newPosition = ((currentPanel*panelWidth)* -1) + timelineOffset;
            
            $('.panel_slider').animate({
                left: newPosition + 'px'
            }, 1000);
            
            var backgroundWidth = $('.timeline .background_slider img').width();
            var moveAmount = (backgroundWidth - timelineWidth)/totalPanels;
            
            if(currentPanel != 0) {
                var multiplier = currentPanel + 1;
                
            }else {
                var multiplier = 0;
            }
            
            var newBackgroundPosition = -moveAmount*multiplier;
            
            $('.background_slider img.background').animate({
                left: newBackgroundPosition +'px'
            }, 1000);
        
        });
}