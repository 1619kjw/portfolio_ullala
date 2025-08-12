/* a태그 새로고침 막기 */
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (anchor.getAttribute('href') === '#') {
        e.preventDefault();
        }
    });
});

//띠배너
const lineBnr = document.querySelector('.line_banner');
const lineClose = document.querySelector('.line_banner .closeBtn');
lineClose.addEventListener('click',()=>{
    lineBnr.style.display = 'none';
})

//메인배너 스와이퍼
const mainSwiper = new Swiper('.main',{
    on:{
        /* this는 Swiper 인스턴스 */
        init:function(){update(this);},
        slideChange:function(){update(this);},
    },
    navigation:{
        nextEl:'.main .swiper-button-next',
        prevEl:'.main .swiper-button-prev',
    },
})
function update(swiper){
    document.querySelector('.current').textContent=String(swiper.realIndex + 1).padStart(2, '0');
    document.querySelector('.total').textContent=String(swiper.slides.length).padStart(2,'0');
}

//신제품 스와이퍼
const newSwiper = new Swiper('.new',{
    slidesPerView:4,
    spaceBetween:16,
    navigation:{
        nextEl:'.new ~ .swiper-button-next',
        prevEl:'.new ~ .swiper-button-prev',
    },
    breakpoints:{
        1300 :{slidesPerView:4,spaceBetween:16,},
        821 :{slidesPerView:3,spaceBetween:16,},
        320 :{slidesPerView:2,spaceBetween:10,},
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
})

//브랜드스타일 스와이퍼
const styleSwiper = new Swiper('.style',{
    slidesPerView:2,
    spaceBetween:10,
    scrollbar:{
        el:'.style .swiper-scrollbar',
    },
})

//베스트상품 스와이퍼
const bestSwiper = new Swiper('.best',{
    slidesPerView:4,
    spaceBetween:16,
    breakpoints:{
        1300 :{slidesPerView:4,spaceBetween:16,},
        821 :{slidesPerView:3,spaceBetween:16,},
        320 :{slidesPerView:2,spaceBetween:10,},
    },
    navigation:{
        nextEl:'.best ~ .swiper-button-next',
        prevEl:'.best ~ .swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
})

//리뷰 스와이퍼
const reviewSwiper = new Swiper('.review',{
    slidesPerView:7,
    spaceBetween:16,
    navigation:{
        prevEl:'.review ~ .swiper-button-prev',
        nextEl:'.review ~ .swiper-button-next',
    },
})

//셀럽아이템 스와이퍼
const celebSwiper = new Swiper('.celeb',{
    slidesPerView:2,
    navigation:{
        prevEl:'.celeb ~ .swiper-button-prev',
        nextEl:'.celeb ~ .swiper-button-next',
    },
    pagination:'.celeb ~ .swiper-pagination',
})

//탭메뉴 공통 js
const tapBtn = document.querySelectorAll('.tapBtn .tap');
const tapContent = document.querySelectorAll('.tapContent');
// console.log(tapBtn,tapContent);
tapBtn.forEach((obj,idx)=>{
    obj.addEventListener('click',()=>{
        tapBtn.forEach(tap => tap.classList.remove('active'));
        obj.classList.add('active');
    })
})




