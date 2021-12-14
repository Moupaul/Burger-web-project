$(document).ready(function(){
    $('.ham').bind('click', function(){
        $(".header-menu .home ul").slideToggle(1000);
    });
});