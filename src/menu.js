// menu 기능 1.
// 기능 1. 첫번째 파트에 아이템 슬라이더로 메뉴를 보여준다.
// 기능 2. 아이템들을 보여주고, 각 아이템들마다 가격, 설명, 상품 추가가 주어진다.

const bodyContainer = document.querySelector('.item-body-container');
const menuBtn = document.querySelector('.menu-btn-container');

window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(itemData);
    applyBtn(itemData);
});

function displayMenuItems(itemData) {
    let dataStr = itemData.map((el) => {
        return `
        <div class="main-item">
        <div class="main-itemWrapper">
            <div class="left-section">
                <img
                    class="item-img"
                    src="${el.img}"
                />
            </div>

            <div class="right-section">
                <div class="item-info">
                    <h4>${el.name}</h4>

                    <h4>${el.price}</h4>
                </div>
                <div class="item-desc">${el.desc}</div>
                <div class="item-count">
                    <span class=count-btn> -</span>
                    <span> 0</span>
                    <span class=count-btn> +</span>
                </div>
            </div>
        </div>
    </div>
        `;
    });

    bodyContainer.innerHTML = dataStr.join('');

    // bodyContainer.insertAdjacentHTML('afterend', dataStr.join(''));
}

function applyBtn(itemData) {
    // let data = itemData.reduce(function(currVal,next){
    //     if(currVal)
    // },['전체'])
}
