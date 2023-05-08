$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
        if($(window).scrollTop()>0){
            $('.top').show();
        }
        else{
            $('.top').hide();
        }
    });
    $(window).om('scroll load',function(){
        $('#menu').removeclass('fa-times');
        $('header').removeclass('fa-times');
    })
    $('a[href*="#]').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$($(this).attr('href')).offset().top,
        },
        500,
        'linear',
        );

    });
});