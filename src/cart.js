const cartItems = document.querySelector(".item-cart-container");
const disiplayCart = document.querySelector(".nav-display-cart");

let currCartBasket = JSON.parse(sessionStorage.getItem("itemCart")) || [];

window.addEventListener("DOMContentLoaded", function () {
    displayCartItems();
    updateCartCount();
});

function displayCartItems() {
    if (currCartBasket) {
        let itemContainer = currCartBasket
            .map(function (el) {
                let filterItem = itemData.filter(function (dataInfo) {
                    return dataInfo.id === el.id;
                })[0];
                console.log(filterItem);

                return `
            <div class="main-item" id=product-id-${filterItem.id} >
        <div class="main-itemWrapper">
            <div class="left-section">
                <img
                    class="cart-img"
                    src="${filterItem.img}"
                />
            </div>

            <div class="right-section">
                <div class="item-info">
                    <h4>${filterItem.name}</h4>
                    <h4>${filterItem.price}</h4>
                </div>
                <div class="item-desc">${filterItem.desc}</div>
                <div class="item-count">
                    <span onclick="decrement('${filterItem.id}')"  class="count-btn">-</span>
                    <span id = '${filterItem.id}'> ${el.countItem}</span>
                    <span onclick="increment('${filterItem.id}')" class="count-btn">+</span>
                </div>

                <div class='currItemTotalPrice'>


                </div>
            </div>
        </div>
        </div>
            `;
            })
            .join("");

        // console.log(itemContainer);
        cartItems.innerHTML = itemContainer;
    } else {
    }
}

function updateCartCount() {
    let totalItemCount = currCartBasket.reduce(function (curr, next) {
        return curr + next.countItem;
    }, 0);
    disiplayCart.textContent = totalItemCount;
}

function increment(itemId) {
    let getItemCount = currCartBasket.find((el) => el.id === itemId);

    if (getItemCount === undefined) {
        currCartBasket.push({
            id: itemId,
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
