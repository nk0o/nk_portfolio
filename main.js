'use strict';

//스크롤 하면 navbar를 투명하게 만들기 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const arrowTop = document.querySelector('.arrow');

document.addEventListener('scroll', function () {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark'); 
    };    
});


/*** Arrow Top ***/
// top화살표 나오기
document.addEventListener('scroll', function () {
    if (window.scrollY > homeHeight/2) {
        arrowTop.classList.add('visuable');
    } else {
        arrowTop.classList.remove('visuable');
    };    
});

//top 화살표 누르면 home 으로 이동
document.querySelector('.arrow').addEventListener('click', ()=>{
    scrollIntoView('#home');
});



//Home의 contact버튼 클릭시 스크롤 이동

const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', function(){
    // const scrollTo = document.querySelector('#contact');
    // scrollTo.scrollIntoView({behavior:'smooth'});
    scrollIntoView('#contact');
})


//navbar 메뉴 클릭시 스크롤 이동

const navbarMenu = document.querySelector('.navbar__menu');
const navbarMenuItems = document.querySelectorAll('.navbar__menu__item');

navbarMenu.addEventListener('click', function(e){
        
    const target = e.target;//<>    
    const link = target.dataset.link;//#
    if (link == null){ //link가 null이거나 undefined인 경우
        //link가 null이 아닐때만 이벤트 작동시키기
        return; 
    }
    // const scrollTo = document.querySelector(link);
    // scrollTo.scrollIntoView({behavior:"smooth", block:"start"});    
    navbarMenuItems.forEach((menu)=>{
        menu.classList.remove('active');
    });
    
    e.target.classList.add('active');
    navbarMenu.classList.remove('togle-show'); 
    scrollIntoView(link);
});


//반응형에서 NAV 토글 버튼
const navToggleBtn = document.querySelector('.navbar__toggle-btn');
//navbarMenu =내비 전체
//navbarMenuItems = 내비 하나하나

navToggleBtn.addEventListener('click',()=>{
        navbarMenu.classList.toggle('togle-show');
        var currentClass = navbarMenu.className;
        
        setTimeout(() => {
            for(let navbarMenuItem of navbarMenuItems){
            navbarMenuItem.classList.add('anim-up');
            }
        }, 100);
       
});




//스크롤 하면 home 배경 서서히 투명하게(fade) 만들기

const homeContainer = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    console.log(1-window.scrollY/homeHeight);
    homeContainer.style.opacity = 1-window.scrollY/homeHeight;
});

//works 버튼 클릭시 해당 하는 것만 나오기

const workBtnContainer = document.querySelector('.works__category');
const projectContainer = document.querySelector('.works__projects');
const workBtns = document.querySelectorAll('.category__btn');
const projects = document.querySelectorAll('.project');


workBtnContainer.addEventListener('click', (e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter ==null){
        return;
    };
    projectContainer.classList.add('anim-out');//사라지고 작아지고 내려가고
    setTimeout(() => {//0.3초 이후에 안에있는거 실행됨
        projects.forEach((project)=>{
            //필터링 하기!
            //console.log(project.dataset.type);
            //버튼의 필터가 전체이거나 프로젝트의 타입과 같다면
            //둘중 하나라도 맞으면 프로젝트의 클래스를 지우고(프로젝트들 보여짐)
            //둘다 아니면 클래스 추가하기(프로젝트들 사라짐)           
            if(filter == '*'|| filter == project.dataset.type){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
        //다시 나타나고 커지고 올라오고
    }, 300);

    workBtns.forEach((workBtn)=>{
        workBtn.classList.remove('active');
    });
    e.target.classList.add('active');
});



//유틸리티 함수
//***버튼 클릭시 스크롤 이동 함수***
function scrollIntoView(where){
    const scrollTo = document.querySelector(where);
    scrollTo.scrollIntoView({behavior:'smooth'});
};

