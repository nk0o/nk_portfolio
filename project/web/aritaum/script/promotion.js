$(function(){
    //최근본상품
    $('#recent_wrap').hide();
    var value = true;
    $('#recent_icon').click(function () {
        if (value == true) {
            $('#recent_wrap').stop(true).fadeIn(200);
            value = false;
        } else {
            $('#recent_wrap').stop(true).fadeOut(200);
            value = true;
        };
    });


    //카테고리 서브
    $('.category .sub_wrap').hide();
    $('.category li').mouseover(function () {
        $(this).find('.sub_wrap').stop(true).fadeIn(500);
    });
    $('.category li').mouseout(function () {
        $(this).find('.sub_wrap').stop(true).fadeOut(10);
    });

    /*메인 내비 중 브랜드 누르면 서브 슬라이드 다운*/
    $('.brand_sub').hide();
    $('.brand_nav').mouseenter(function () {
        $('.brand_sub').stop(true).slideDown(500);
    })
    $('.brand_nav').mouseleave(function () {
        $('.brand_sub').stop(true).slideUp(500);
    })

    //top누르면 위로 
     $('.top').click(function(){
       $('body,html').animate({
           scrollTop:0
       },500);
    });
$('.category').hide();
var click = true;
$('#all_menu').click(function(){
    if(click==true){
        $('.category').stop(true).slideDown(500,'swing');
        click=false;
    }else{
        $('.category').stop(true).slideUp(500,'swing');
        click=true;
    }
});
})//e:ready