$(function () {
    //fixed index 글자색 줄 길게
    var $index1 = $('#main_wrap').offset().top;
    var $index2 = $('#busi_wrap').offset().top;
    var $index3 = $('#product_wrap').offset().top;
    var $index4 = $('#pr_wrap').offset().top;
    var $index5 = $('#recruit_wrap').offset().top;
    $('#index button').eq(0).click(function () {
        $('html, body').animate({
            scrollTop: $index1.top
        }, 400);
    });
    $(window).scroll(function () {
        if ($('html, body').scrollTop() > $index1 - 400) {
            $('#index button p').css({
                'font-weight': '400',
                'color': '#fff'
            });
            $('#index button p').html('');
            $('#index button').find('span').css({
                'width': '30',
                'background-color': '#fff'
            });
            $('#index button p').eq(0).css({
                'font-weight': '700',
                'color': '#fff'
            });
            $('#index button p').eq(0).html('ONLY ORION');
            $('#index button').eq(0).find('span').css('width', '70');
            if ($('html, body').scrollTop() > $index2 - 400) {
                $('#index button p').css({
                    'font-weight': '400',
                    'color': '#ed1b29'
                });
                $('#index button p').html('');
                $('#index button').find('span').css({
                    'width': '30',
                    'background-color': '#ed1b29'
                });
                $('#index button p').eq(1).css('font-weight', '700');
                $('#index button p').eq(1).html('BUSINESS');
                $('#index button').eq(1).find('span').css('width', '70');
                if ($('html, body').scrollTop() > $index3 - 400) {
                    $('#index button p').css({
                        'font-weight': '400',
                        'color': '#ed1b29'
                    });
                    $('#index button p').html('');
                    $('#index button').find('span').css({
                        'width': '30',
                        'background-color': '#ed1b29'
                    });
                    $('#index button p').eq(2).css('font-weight', '700');
                    $('#index button p').eq(2).html('PRODUCT');
                    $('#index button').eq(2).find('span').css('width', '70');
                    if ($('html, body').scrollTop() > $index4 - 400) {
                        $('#index button p').css({
                            'font-weight': '400',
                            'color': '#333'
                        });
                        $('#index button p').html('');
                        $('#index button').find('span').css({
                            'width': '30',
                            'background-color': '#333'
                        });
                        $('#index button p').eq(3).css('font-weight', '700');
                        $('#index button p').eq(3).html('PR ROOM');
                        $('#index button').eq(3).find('span').css('width', '70');
                        if ($('html, body').scrollTop() > $index5 - 400) {
                            $('#index button p').css({
                                'font-weight': '400',
                                'color': '#fff'
                            });
                            $('#index button p').html('');
                            $('#index button').find('span').css({
                                'width': '30',
                                'background-color': '#fff'
                            });
                            $('#index button p').eq(4).css('font-weight', '700');
                            $('#index button p').eq(4).html('RECRUIT');
                            $('#index button').eq(4).find('span').css('width', '70');
                        }
                    }
                }
            }
        }
    }); //e: scroll event
    //인덱스 버튼 클릭하면 이동
    $('#index button').eq(0).click(function(){
        $('html,body').animate({
            scrollTop:$index1-500
        },500)
    });
    $('#index button').eq(1).click(function(){
        $('html,body').animate({
            scrollTop:$index2-100
        },500)
    });
    $('#index button').eq(2).click(function(){
        $('html,body').animate({
            scrollTop:$index3-100
        },500)
    });
    $('#index button').eq(3).click(function(){
        $('html,body').animate({
            scrollTop:$index4-100
        },500)
    });
    $('#index button').eq(4).click(function(){
        $('html,body').animate({
            scrollTop:$index5-100
        },500)
    });
    //모바일 내비
            $('.mobile_nav').find('.mobile_sub').hide();
    var value = true;
    $('.mobile_nav button').click(function () {
        if (value == true) {
            $('.mobile_nav').find('.mobile_sub').slideDown(500, 'swing');
            value = false;
        } else {
            $('.mobile_nav').find('.mobile_sub').slideUp(500, 'swing');
            value = true;
        }
    });
    $('#mobile_nav_wrap').hide()
    var value = true;
    $('#m_nav').click(function () {
        if (value == true) {
            $('#mobile_nav_wrap').stop(true).show();
            value = false;
        } else {
            $('#mobile_nav_wrap').stop(true).hide();
            value = true;
        }
    });
    
    //사이트맵
    $('#site_map').hide();
    $('.sitemap_icon').click(function () {
        $('#site_map').stop(true).slideDown(600, 'swing');
    });
    $('.map p').click(function () {
        $('#site_map').stop(true).slideUp(600, 'swing');
    });
    //사이트맵 마우스 오버
    $('.map a').mouseover(function () {
        $(this).css({
            'color': '#ed1b29',
            'font-weight': '700'
        });
    }).mouseout(function () {
        $(this).css({
            'color': '#fff',
            'font-weight': '400'
        });
    });

    //사이트 언어선택
    $(this).find('.eng').hide();
    $('.lang').mouseover(function () {
        $(this).find('.eng').stop(true).slideDown(500, "swing");
        $(this).find('.eng').css('border-bottom', '2px solid #ed1b29');
    }).mouseleave(function () {
        $(this).find('.eng').stop(true).slideUp(500, "swing");
    })
    //메인내비 마우스오버 글자색
    $('.main_nav a').mouseenter(function () {
        $(this).css('color', '#ed1b29');
    }).mouseleave(function () {
        $(this).css('color', '#333');
    });
    //서브내비 슬라이드 나타내기
    $('.sub_nav_wrap').hide();
    $('nav').mouseenter(function () {
        $('.sub_nav_wrap').stop(true).slideDown(500, 'swing');
    }).mouseleave(function () {
        $('.sub_nav_wrap').stop(true).slideUp(500, 'swing');
    })
    //서브내비 마우스오버 배경색 글자색
    $('.sub_nav').find('a').mouseover(function () {
        $(this).css({
            'background-color': '#ed1b29',
            'color': '#fff'
        })
    }).mouseout(function () {
        $(this).css({
            'background-color': '#fff',
            'color': '#666'
        })
    });
    //메인배너 슬릭
    $('.main_img').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        fade: true,
        autoplaySpeed: 3000,
        speed: 3000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                }
    },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
    }
  ]
    });
    //비지니스 엔터테이먼트 슬라이드 이미지 애니메이터
    var num = 0; //index number변수
    var result = 0; // 결과 저장
    function slide() {
        timer = setInterval(function () {
            var result = num * -630;
            num++;
            if (num > 1) {
                num = 0;
            }
            $('.busi_img_wrap').stop(true).animate({
                top: result + 'px'
            }, 2000)
        }, 3000);
    };
    slide();

    //비지니스 more 화살표 움직이기
    $('#busi_wrap .more').mouseover(function () {
        $(this).find('span').stop(true).animate({
            left: 70
        })
    }).mouseout(function () {
        $(this).find('span').stop(true).animate({
            left: 55
        })
    });
    //제품 more 화살표 움직이기
    $('#product_wrap .more').mouseover(function () {
        $(this).find('span').stop(true).animate({
            left: 110
        })
    }).mouseout(function () {
        $(this).find('span').stop(true).animate({
            left: 90
        })
    });
    //메인화면 scroll 움직이기
    $('.scroll').mouseover(function () {
        $(this).find('span').stop(true).animate({
            bottom: 70
        })
    }).mouseout(function () {
        $(this).find('span').stop(true).animate({
            bottom: 55
        })
    });
    //제품 슬릭    
    $('.pro_contents').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    dots: true,
                    arrows: true,
                    slidesToShow: 1,
                    infinite: true,
                }
    },
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1
                }
    }
  ]
    });

    //PR ROOM - left 슬릭    
    $('.pr_contents').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
        centerPadding: '10px'
    });
    //pr - right 버튼 색
    $('.go_link').mouseover(function () {
        $(this).css({
            'background-color': '#fff',
            'color': '#ed1b29',
            'font-weight': '700'
        });
    }).mouseout(function () {
        $(this).css({
            'background-color': '#ed1b29',
            'color': '#fff',
            'font-weight': '400'
        });
    });
    //채용 자세히보기 화살표
    $('.recruit a').mouseover(function () {
        $(this).find('img').stop(true).animate({
            left: 114
        })
    }).mouseout(function () {
        $(this).find('img').stop(true).animate({
            left: 97
        })
    });
    //footer 관련사이트
    $('.site ul').hide();
    var $click = true;
    $('.site button').click(function () {
        if ($click == true) {
            $('.site ul').stop(true).slideDown(500, 'swing');
            $click = false;
        } else {
            $('.site ul').stop(true).slideUp(500, 'swing');
            $click = true;
        }
    });


}) //e:ready
