// menu 기능 1.
// 기능 1. 첫번째 파트에 아이템 슬라이더로 메뉴를 보여준다.
// 기능 2. 아이템들을 보여주고, 각 아이템들마다 가격, 설명, 상품 추가가 주어진다.
const bodyContainer = document.querySelector(".item-body-container");
const menuBtn = document.querySelector(".menu-btn-container");
const disiplayCart = document.querySelector(".nav-display-cart");

let currCartBasket = JSON.parse(sessionStorage.getItem("itemCart")) || [];

window.addEventListener("DOMContentLoaded", function () {
    let currMenu = document.location.href.split("#")[1];
    let hasFilterMenu = "";

    if (currMenu) {
        hasFilterMenu = itemData.filter(function (el) {
            return el.category === currMenu;
        });
    }

    if (hasFilterMenu) {
        displayMenuItems(hasFilterMenu);
    } else {
        displayMenuItems(itemData);
    }
    applyMenuBtn(itemData);
    applyCountBtn(itemData);
    updateCartCount();
});

function displayMenuItems(itemData) {
    let dataStr = itemData
        .map((el) => {
            let searchItemInfo = currCartBasket.find((currBasket) => currBasket.id === el.id) || [];

            return `
        <div class="main-item" id=product-id-${el.id} >
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
                    <h4>${makeMoneyComma(el.price)} 원</h4>
                </div>
                <div class="item-desc">${el.desc}</div>
                <div class="item-count">
                    <span onclick="decrement('${el.id}')"  class="count-btn">-</span>
                    <span id = '${el.id}'> ${
                searchItemInfo.countItem === undefined ? 0 : searchItemInfo.countItem
            }</span>
                    <span onclick="increment('${el.id}','${el.name}','${
                el.price
            }')" class="count-btn">+</span>
                </div>
            </div>
        </div>
        </div>
        `;
        })
        .join("");

    bodyContainer.innerHTML = dataStr;

    // bodyContainer.insertAdjacentHTML('afterend', dataStr.join(''));
}

function increment(itemId, itemName, itemPrice) {
    let getItemCount = currCartBasket.find((el) => el.id === itemId);

    if (getItemCount === undefined) {
        currCartBasket.push({
            id: itemId,
            name: itemName,
            price: itemPrice,
            countItem: 1,
        });
    } else {
        getItemCount.countItem += 1;
    }

    updateDom(itemId);
    sessionStorage.setItem("itemCart", JSON.stringify(currCartBasket));
}

function decrement(itemId) {
    let getItemCount = currCartBasket.find((el) => el.id === itemId);

    if (getItemCount === undefined) return;
    else if (getItemCount.countItem === 0) return;
    else {
        getItemCount.countItem -= 1;
    }

    updateDom(itemId);
    let isEmptyBasket = currCartBasket.filter(function (el) {
        return el.countItem !== 0;
    });

    sessionStorage.setItem("itemCart", JSON.stringify(isEmptyBasket));
}

function updateDom(id) {
    let getItemCount = currCartBasket.find(function (el) {
        return el.id === id;
    });

    console.log(id);

    document.getElementById(id).innerHTML = getItemCount.countItem;
    updateCartCount();
}

function updateCartCount() {
    let totalItemCount = currCartBasket.reduce(function (curr, next) {
        return curr + next.countItem;
    }, 0);
    disiplayCart.textContent = totalItemCount;
}
function applyCountBtn(itemData) {
    let itemCount = document.querySelector(".item-count");
}

function applyMenuBtn(itemData) {
    let data = itemData.reduce(
        function (currVal, next) {
            if (!currVal.includes(next.category)) {
                currVal.push(next.category);
            }
            return currVal;
        },
        ["전체"]
    );
    // menuBtn
    let displayData = data
        .map(function (el) {
            let changeLang = "";

            switch (el) {
                case "china":
                    changeLang = "중식";
                    break;

                case "usa":
                    changeLang = "양식";
                    break;

                case "korea":
                    changeLang = "한식";
                    break;

                case "japan":
                    changeLang = "일식";
                    break;

                case "desert":
                    changeLang = "디저트";

                    break;
                default:
                    changeLang = "전체";
            }

            return `
        <button class="menu-btn" data-btnid=${el} id=${el}>${changeLang}</button>
        `;
        })
        .join("");

    menuBtn.innerHTML = displayData;

    displayMenuBtn();
}

function displayMenuBtn() {
    let filterBtn = menuBtn.querySelectorAll(".menu-btn");

    filterBtn.forEach(function (el) {
        el.addEventListener("click", function (e) {
            let categoryName = e.currentTarget.dataset.btnid;

            let filterItems = itemData.filter(function (el2) {
                return el2.category === categoryName;
            });

            if (categoryName === "전체") {
                displayMenuItems(itemData);
            } else {
                displayMenuItems(filterItems);
            }
        });
    });
}

function makeMoneyComma(beforeComma) {
    return beforeComma.toLocaleString();
}
