/* DOM적용 JS */

//신제품 스와이퍼 DB삽입
const wrapper = document.querySelector('.new .swiper-wrapper');
const itemShow = 4;
const startIndex = 0;
let endIndex = startIndex + itemShow;
let isLoading = false;
console.log(itemShow,startIndex,endIndex)
console.log(wrapper);

loadMoreContent()
function loadMoreContent(){
    for(let i=startIndex; i<endIndex; i++){

        const newSlide = document.createElement('div');
        newSlide.className=`swiper-slide slide${i+1}`;
        const tagsHTML = ullalaDB[i].tags.map(tag => `<span class="tag">${tag}</span>`).join("");

        newSlide.innerHTML = `<a href="#"><img class="product" src="${ullalaDB[i].src}" alt="${ullalaDB[i].name}"></a>`
        newSlide.innerHTML += `<div class="tags">${tagsHTML}</div>`
        newSlide.innerHTML += `<h2 class="brand">${ullalaDB[i].brand}</h2>`
        newSlide.innerHTML += `<a href="#"><p class="name">${ullalaDB[i].name}</p></a>`
        newSlide.innerHTML += `<p class="price">${(ullalaDB[i].price).toLocaleString('ko-kr')}원</p>`
        newSlide.innerHTML += `<img class="cart" src="${ullalaDB[i].cart}" alt="장바구니담기">`
        wrapper.appendChild(newSlide);
        
        /* a태그 새로고침 막기 */
        document.querySelectorAll('a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                if (anchor.getAttribute('href') === '#') {
                e.preventDefault();
                }
            });
        });
    }
}