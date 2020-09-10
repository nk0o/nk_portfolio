$(function () {
    //모바일 내비
    $("#mobile_nav_wrap").hide();
    var click = true;
    $('.all_menu').click(function(){
       if(click==true){ 
           $("#mobile_nav_wrap").stop(true).show(300,'swing');
           click=false;}
        else{
            $("#mobile_nav_wrap").stop(true).hide(300,'swing');
            click=true;
        }
    });
   $('.mobile_sub').hide();
    var click = true;
    $('.mobile_nav li').click(function(){
       if(click==true){ 
           $(this).children(".mobile_sub").stop(true).slideDown(300,'swing');
           $(this).css('background-color','#eee');
           click=false;
       }
        else{
            $(this).children(".mobile_sub").stop(true).slideUp(300,'swing');
           $(this).css('background-color','#fff');
            click=true;
        }
    });
    
    //서브 내비 슬라이드
    $('.sub_nav_wrap').hide();
    $('nav').mouseover(function () {
        $('.sub_nav_wrap').stop(true).slideDown(500, "swing");
    }).mouseout(function () {
        $('.sub_nav_wrap').stop(true).slideUp(500, "swing");
    });

    //메인 내비게이션 마우스 오버
    $('.main_nav li a').mouseover(function () {
        $(this).css('background-color', '#2197D7');
        $(this).css('color', '#fff');
    }).mouseout(function () {
        $(this).css('background-color', 'transparent');
        $(this).css('color', '#333');
    });

    //서브 내비 마우스 오버
    $('.sub_nav li').mouseover(function () {
        $(this).css({
            'background-color': '#2197D7'
        })
        $(this).children('a').css('color', '#fff');
    }).mouseout(function () {
        $(this).css({
            'background-color': 'transparent'
        })
        $(this).children('a').css('color', '#333');
    });

    // 검색창 if문
    $('#searchFrm').hide();
    var click = true;
    $('.search').click(function () {
        if (click == true) {
            $('#searchFrm').fadeIn(200);
            click = false;
        } else {
            $('#searchFrm').fadeOut(200);
            click = true;
        };

    });

    $('.often a').mouseover(function () {
        if ($(window).width() > 800) {
            $(this).css({
                'background-size': '35%',
                'color': '#35698b',
                'font-weight': '700'
            });
        } else {
            $(this).css({
                'background-size': '55%',
                'color': '#35698b',
                'font-weight': '700'
            });
        }
    }).mouseout(function () {
        if ($(window).width() > 800) {
            $(this).css({
                'background-size': '30%',
                'color': '#888',
                'font-weight': '400'
            });
        } else {
            $(this).css({
                'background-size': '50%',
                'color': '#888',
                'font-weight': '400'
            });
        }
    });

    //메인 배너 슬릭
    $('.main_bnr').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                }
        },
            {
                breakpoint:800,
                settings: {
                    arrows: false,
                }
        }
      ]

    });
  


    // 일시정지/재생 버튼 if문
    var click = true;
    $('.pause').click(function () {
        if (click == true) {
            $(this).css('background-image', 'url(images/play_dot.png)');
            click = false;
        } else {
            $(this).css('background-image', 'url(images/Rounded%20Rectangle%204%20copy.png)');
            click = true;
        };
    });
    
    //조사참여하기 탭 색깔 바꾸기
    //조사참여하기 버튼 클릭시 화면 전환
    $('.meet_survey').hide();
    $('.p_m_survey').hide();
    $('.s2_tab button').eq(0).click(function () {
        $(this).css({'background-image':'url(images/tab_wrap.png)','color':'#fff'});
        $('.s2_tab button').eq(1).css({'background-image':'url(images/tab_wrap_white.png)','color':'#333'});
        $('.s2_tab button').eq(2).css({'background-image':'url(images/tab_wrap_white.png)','color':'#333'});
        $('.all_survey').show();
        $('.meet_survey').hide();
        $('.p_m_survey').hide();
    });
    $('.s2_tab button').eq(1).click(function () {
        $(this).css({'background-image':'url(images/tab_wrap.png)','color':'#fff'});
        $('.s2_tab button').eq(0).css({'background-image':'url(images/tab_wrap_white.png)','color':'#333'});
        $('.s2_tab button').eq(2).css({'background-image':'url(images/tab_wrap_white.png)','color':'#333'});
        $('.all_survey').hide();
        $('.meet_survey').show();
        $('.p_m_survey').hide();
    });
    $('.s2_tab button').eq(2).click(function () {
        $(this).css({'background-image':'url(images/tab_wrap.png)','color':'#fff'});
        $('.s2_tab button').eq(0).css({'background-image':'url(images/tab_wrap_white.png)','color':'#333'});
        $('.s2_tab button').eq(1).css({'background-image':'url(images/tab_wrap_white.png)','color':'#333'});
        $('.all_survey').hide();
        $('.meet_survey').hide();
        $('.p_m_survey').show();
    });


    //조사참여하기 마우스 오버
    $('.survey_wrap a').mouseover(function () {
        $(this).css('box-shadow', '7px 7px 7px #aaa')
        $(this).children('.img').css('background-size', '120%');
        $(this).find('h3').css('font-weight', '700');
        $(this).find('.reward').css('font-weight', '700');
        $(this).find('span').css('font-weight', '700');
        
    }).mouseout(function () {
        $(this).css('box-shadow', 'none')
        $(this).children('.img').css('background-size', '117%');
        $(this).find('h3').css('font-weight', '400');
        $(this).find('.reward').css('font-weight', '400');
        $(this).find('span').css('font-weight', '400');
    })

    /* //재미있는 조사세상 마우스 오버
     $('#s3_wrap .slick-slide img').mouseover(function(){
         $(this).attr('style','120%');
     }).mouseout(function(){
         $(this).attr('style','100%');
     })    */

    //더보기 버튼 마우스오버
    $('.more a').mouseover(function () {
        $(this).css({
            'background-color': '#316588',
            'color': '#fff'
        });
        $(this).children('span').css('background-image', 'url(images/more_arrow_white.png)')
        $(this).children('span').stop(true).animate({
            right: 40
        }, 200);
    }).mouseout(function () {
        $(this).css({
            'background-color': '#fff',
            'color': '#316588'
        });
        $(this).children('span').css('background-image', 'url(images/more_arrow.png)')
        $(this).children('span').stop(true).animate({
            right: 60
        }, 200);
    })

    //재밌는조사세상 슬릭
    $('.survey_result').slick({
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
        },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
        }
      ]
    });
    //관련사이트 목록 나오기
    $('.site').hide();
    $('footer .wrap').click(function () {
        if (click == true) {
            $('.site').stop(true).slideDown(300, 'swing');
            click = false;
        } else {
            $('.site').stop(true).slideUp(300, 'swing');
            click = true;
        }
    });
    //공지사항 밑줄 가기
    $('.notice_contents a').mouseover(function () {
        $(this).css('border-bottom', '1px dashed #aaa');
    }).mouseout(function () {
        $(this).css('border-bottom', '0');
    })
    //화면 크기에 따라서 이미지 변화주기
/*$( window ).resize(function() {

	var width=window.innerWidth;

	if (width < 800){

		jQuery('#s1_wrap .slick-slide img:nth-child(1)').attr('src','images/meeting.png')
	}

		}).resize();*/



}) //e:ready
    