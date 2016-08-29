/*  JavaScript Document                      */



var timelineWidth = 0;
var panelWidth = 0;
var firstRun = true;
var totalPanel = 0;
var currentdPanel = 0;

$(document).ready(function() {
   panelWidth = $('.timeline .panel').width(); 
    
   adjustLayout();
});

function adjustLayout() {
    $('.timeline .panel').each(function(index) {
        var newX = panelWidth * index;
        $(this).css('left', newX + 'px');
        
        var newLabel = $(this).find('.label').html();
        $('.timeline nav').append('<a href="#">' + newLabel + '</a>');
    });
}