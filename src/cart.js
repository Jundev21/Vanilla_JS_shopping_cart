const cartItemsContainer = document.querySelector(".cart-item-total-price-container");
const cartItems = document.querySelector(".cart-main-item");
const disiplayCart = document.querySelector(".nav-display-cart");
const itemCartContainer = document.querySelector(".item-cart-container");

let currCartBasket = JSON.parse(sessionStorage.getItem("itemCart")) || [];
window.addEventListener("DOMContentLoaded", function () {
    displayCartItems();
    updateCartCount();
});

function displayCartItems() {
    if (currCartBasket.length !== 0) {
        let itemContainer = currCartBasket
            .map(function (el) {
                let basketItems = itemData.filter(function (dataInfo) {
                    return dataInfo.id === el.id;
                })[0];
                return `
                <div class="cart-itemWrapper" id=product-id-${basketItems.id}>
                        <div class="left-section">
                            <img
                            class="cart-img"
                            src="${basketItems.img}"
                            />
                        </div>

                        <div class="right-section">
                                <div class="item-info">
                                    <h4>${basketItems.name}</h4>
                                    <h4>${basketItems.price}</h4>
                                </div>
                                <div class="item-desc">${basketItems.desc}</div>
                                <div class="item-count">
                                    <span onclick="decrement('${basketItems.id}')"  class="count-btn">-</span>
                                    <span id = '${basketItems.id}'> ${el.countItem}</span>
                                    <span onclick="increment('${basketItems.id}','${basketItems.name}','${el.price}')" class="count-btn">+</span>
                                </div>
                        </div>
                </div>            
                `;
            })
            .join("");
        cartItems.innerHTML = itemContainer;

        let totalItemPrice = 0;
        let receiptContainer =
            `  <div class="cart-item-total-price">` +
            `<h3>영수증</h3>` +
            currCartBasket
                .map(function (currItem) {
                    let itemSum = currItem.countItem * currItem.price;
                    totalItemPrice += itemSum;
                    return `
            
            <div class="receiptWrapper">
                <div class="recipetItemsInfo">${currItem.name} * ${currItem.countItem}  </div>
                <div>=</div>
                <div class="reciptItemsTotal">${itemSum} <span class='unit'>원</span></div>
            </div>
            `;
                })
                .join("") +
            `
                <div class="receiptTotalContainer">
                    <div class="recipetItemsInfo">total</div>
                    <div class="reciptItemsTotal">${totalItemPrice} <span class='totalUnit'>원</span></div>
                </div>
            </div>
                `;

        cartItemsContainer.innerHTML += receiptContainer;
    } else {
        const showCartStatus = document.createElement("div");
        showCartStatus.classList = "displayEmpty";
        showCartStatus.textContent = "장바구니가 비어있습니다.";
        itemCartContainer.appendChild = showCartStatus;
        // itemCartContainer.innerHTML = `< class='displayEmpty> 장바구니가 비어있습니다.</div>`;
    }
}

function updateCartCount() {
    let totalItemCount = currCartBasket.reduce(function (curr, next) {
        return curr + next.countItem;
    }, 0);
    disiplayCart.textContent = totalItemCount;
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

    console.log(currCartBasket);
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
