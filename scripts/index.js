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

})

//탭메뉴 공통 js
const tapBtn = document.querySelectorAll('.tapBtn .tap');
const tapContent = document.querySelectorAll('.tapContent');
console.log(tapBtn,tapContent);
tapBtn.forEach((obj,idx)=>{
    obj.addEventListener('click',()=>{
        tapBtn.forEach(tap => tap.classList.remove('active'));
        obj.classList.add('active');
    })
})
