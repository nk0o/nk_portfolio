$(function () {
    //메인 배너 슬릭
    $('.center').slick({
        dots: true,
        autoplay: true,
        autoplayspeed: 2000,
        centerMode: true,
        centerPadding: '60px',
        variableWidth: true,
        slidesToShow: 1,
        infinite: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
                    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
                    }
                ]
    }); //e:.center_slick

    //베스트 셀러 슬릭
    $('.best_seller').slick({
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
                    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
                    }
                ]
    }); //e:.best_seller_slick

    //브랜드 이름 슬릭
    $('.brand_name').slick({
        variableWidth: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
                    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
                    }
                ]
    }); //e:.brand_name_slick


    //BRAND tap 이름 누르면 밑에 item목록 이미지 변화주기
    $('.brand_item2').hide();
    $('.brand_item3').hide();
    $('.brand_item4').hide();
    for (var i = 0; i <= 14; i++) {
        (function (i) {
            $('#s3_wrap .slick-slide').eq(i).click(function () {
                if (i % 2 == 0) {
                    $('.brand_item1').show();
                    $('.brand_item2').hide();
                } else {
                    $('.brand_item2').show();
                    $('.brand_item1').hide();
                }
            });
        })(i)
    };




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

    //배너광고 스크롤 시 slidedown걸기
    $('.bnr_wrap img').slideUp();
    var $bnr1 = $('.bnr_wrap1').offset().top;
    var $bnr2 = $('.bnr_wrap2').offset().top;
    var $bnr3 = $('.bnr_wrap3').offset().top;
    var $bnr4 = $('.bnr_wrap4').offset().top;

    $(window).scroll(function () {
        if ($('html, body').scrollTop() > $bnr1 - 500) {
            $('.bnr_wrap1 img').stop(true).fadeIn(500);
            if ($('html, body').scrollTop() > $bnr2 - 500) {
                $('.bnr_wrap2 img').stop(true).fadeIn(500);
                if ($('html, body').scrollTop() > $bnr3 - 500) {
                    $('.bnr_wrap3 img').stop(true).fadeIn(500);
                    if ($('html, body').scrollTop() > $bnr4 - 500) {
                        $('.bnr_wrap4 img').stop(true).fadeIn(500);
                    }
                }
            }
        }  
    }); //e: scroll event


    //동영상1 재생
    $('.tip1 .play').click(function(){
            $('.tip1 .tip_vid').get(0).play();
            $('.tip1 .play').hide()
    });
    var play =true;
    $('.tip1 .tip_vid').click(function(){
        if(play == true){
    $('.tip1 .tip_vid').get(0).pause();
            play=false;
        }else{
            $('.tip1 .tip_vid').get(0).play();
            play=true;            
        }
    });
    
    //동영상2 재생
    $('.tip2 .play').click(function(){
            $('.tip2 .tip_vid').get(0).play();
            $('.tip2 .play').hide()
    });
    var play =true;
    $('.tip2 .tip_vid').click(function(){
        if(play == true){
    $('.tip2 .tip_vid').get(0).pause();
            play=false;
        }else{
            $('.tip2 .tip_vid').get(0).play();
            play=true;            
        }
    });
}); //e:ready
