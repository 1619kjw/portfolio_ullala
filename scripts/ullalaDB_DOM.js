/* DOM적용 JS */

function aPrevent(){/* a태그 새로고침 막기 */
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (anchor.getAttribute('href') === '#') {
            e.preventDefault();
            }
        });
    });
}


//2행 : 신제품 스와이퍼 DB삽입
const newWrapper = document.querySelector('.new .swiper-wrapper');
const row2ItemShow = 8;
const row2StartIndex = 0;
let row2EndIndex = row2StartIndex + row2ItemShow;

row2MoreContent();
function row2MoreContent(){
    for(let i=row2StartIndex; i<row2EndIndex; i++){

        const newSlide = document.createElement('div');
        newSlide.className=`swiper-slide slide${i+1}`;
        const tagsHTML = newDB[i].tags.map(tag => `<span class="tag">${tag}</span>`).join("");

        newSlide.innerHTML = `<a href="#"><img class="product" src="${newDB[i].src}" alt="${newDB[i].name}"></a>`
        newSlide.innerHTML += `<div class="tags">${tagsHTML}</div>`
        newSlide.innerHTML += `<h2 class="brand">${newDB[i].brand}</h2>`
        newSlide.innerHTML += `<a href="#"><p class="name">${newDB[i].name}</p></a>`
        newSlide.innerHTML += `<p class="price">${(newDB[i].price).toLocaleString('ko-kr')}원</p>`
        newSlide.innerHTML += `<img class="cart" src="${newDB[i].cart}" alt="장바구니담기">`
        newWrapper.appendChild(newSlide);
        
        aPrevent();
        //장바구니 클릭 시 이미지 변경
        const cartImg = newSlide.querySelectorAll('img[alt="장바구니담기"]');
        cartImg.forEach(obj=>{
            obj.addEventListener('click',()=>{
                if(obj.src.includes('small_cart_active.png')){
                    obj.src = './images/small_cart.png';
                }else{
                    obj.src = './images/small_cart_active.png';
                }
            });
        });
    }
}

//3행 : 스타일 스와이퍼 DB삽입
const styleWrapper = document.querySelector('.style .swiper-wrapper');
const row3ItemShow = 4;
const row3StartIndex = 0;
let row3EndIndex = row3StartIndex + row3ItemShow;
row3MoreContent();
function row3MoreContent(){
    for(let i=row3StartIndex; i<row3EndIndex; i++){
        const newSlide = document.createElement('div');
        newSlide.className=`swiper-slide slide${i+1}`;
        const item = styleDB[i]

        newSlide.innerHTML = `
            <a class="listImg" href="#"><img src="${item.src}" alt="상품이미지"></a>
            <div class="tags">
                ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <h2 class="brand">${item.brand}</h2>
            <a href="#"><p class="name">${item.name}</p></a>
            <div class="bottom">
                <p class="price">${(item.price).toLocaleString('ko-kr')}원</p>
                <a class="cart" href="#"><img src="${item.cart}" alt="장바구니담기"></a>
            </div>
        `;
        styleWrapper.appendChild(newSlide);
        aPrevent();
        //장바구니 클릭 시 이미지 변경
        const cartImg = newSlide.querySelectorAll('img[alt="장바구니담기"]');
        cartImg.forEach(obj=>{
            obj.addEventListener('click',()=>{
                if(obj.src.includes('small_cart_active.png')){
                    obj.src = './images/small_cart.png';
                }else{
                    obj.src = './images/small_cart_active.png';
                }
            });
        });
        // <div class="swiper-slide slide1">
        //     <a class="listImg" href="#"><img src="./images/row2/tap1/01.png" alt="상품이미지"></a>
        //     <div class="tags">
        //         <span>NEW</span>
        //         <span>커플</span>
        //         <span>COUPON</span>
        //     </div>
        //     <h2>ULLALA</h2>
        //     <p>[25185WPSSN] 테일러 반팔 여성페어 크림 (32수)</p>
        //     <div class="bottom">
        //         <p>76,000원</p>
        //         <a href="#"><img src="./images/small_cart.png" alt="장바구니담기"></a>
        //     </div>
        // </div>
    }
}

//4행 : 베스트 스와이퍼 DB삽입
const bestWrapper = document.querySelector('.best .swiper-wrapper');
const row4ItemShow = 8;
const row4StartIndex = 0;
let row4EndIndex = row4StartIndex + row4ItemShow;
row4MoreContent();
function row4MoreContent(){
    for(let i=row4StartIndex; i<row4EndIndex; i++){
        const newSlide = document.createElement('div');
        newSlide.className=`swiper-slide slide${i+1}`;
        const item = bestDB[i]

        newSlide.innerHTML = `
            <a class="listImg" href="#"><img src="${item.src}" alt="상품이미지"></a>
            <div class="tags">
                ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <h2 class="brand">${item.brand}</h2>
            <a href="#"><p class="name">${item.name}</p></a>
            <div class="bottom">
                <p class="price">${(item.price).toLocaleString('ko-kr')}원</p>
                <a class="cart" href="#"><img src="${item.cart}" alt="장바구니담기"></a>
            </div>
        `;
        bestWrapper.appendChild(newSlide);
        aPrevent();
        //장바구니 클릭 시 이미지 변경
        const cartImg = newSlide.querySelectorAll('img[alt="장바구니담기"]');
        cartImg.forEach(obj=>{
            obj.addEventListener('click',()=>{
                if(obj.src.includes('small_cart_active.png')){
                    obj.src = './images/small_cart.png';
                }else{
                    obj.src = './images/small_cart_active.png';
                }
            });
        });
    }
}

//5행 : 리뷰 스와이퍼 DB삽입
const reviewWrapper = document.querySelector('.review .swiper-wrapper');
const row5ItemShow = 10;
const row5StartIndex = 0;
let row5EndIndex = row5StartIndex + row5ItemShow;
row5MoreContent();
function row5MoreContent(){
    for(let i = row5StartIndex; i<row5EndIndex; i++){
        const newSlide = document.createElement('div');
        newSlide.className=`swiper-slide slide${i+1}`;
        const item = reviewDB[i];

        newSlide.innerHTML = `
            <div class="verticalWrap">
                <a href="#" class="topImg">
                    <img src="${item.src1}" alt="리뷰사진">
                </a>
                <a href="#" class="bottomImg">
                    <img src="${item.src2}" alt="리뷰사진">
                </a>
            </div>
        `;
        reviewWrapper.appendChild(newSlide);
    }
}


//6행 : 룩북 DB 삽입
// const tapContent = document.querySelector('#row6_lookbook .container .tapContents .tapContent');

//7행 : 셀럽착용제품 DB
const celebWrapper = document.querySelector('#row7_celeb .container .celeb .swiper-wrapper');
const row7ItemShow = 4;
const row7StartIndex = 0;
let row7EndIndex = row7StartIndex + row7ItemShow;
row7MoreContent();

function row7MoreContent(){
    for(let i = row7StartIndex; i<row7EndIndex; i++){
        const newSlide = document.createElement('div');
        newSlide.className=`swiper-slide slide${i+1}`;
        const item = celebDB[i];

        newSlide.innerHTML = `
            <a href="#" class="celeb">
                <img src="${item.src1}" alt="${item.alt1}">
                <p>${item.source}</p>
                <p>${item.celeb}</p>
            </a>
            <div class="product">
                <a href="#"><img src="${item.src2}" alt="${item.alt2}"></a>
                <div class="main">
                    <p>${item.product}</p>
                    <button type="button"><img src="${item.cart}" alt="장바구니담기"></button>
                </div>
                <p class="text">${item.text}</p>
                <p class="price">${(item.price).toLocaleString('ko-kr')}원</p>
            </div>
        `;
        celebWrapper.appendChild(newSlide);
    }
}