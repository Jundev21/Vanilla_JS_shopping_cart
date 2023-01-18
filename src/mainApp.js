const wrapper = document.querySelector(".slider-wrapper");
const cardContainer = document.querySelectorAll(".item-card-container");
const disiplayCart = document.querySelector(".nav-display-cart");

let currCartBasket = JSON.parse(sessionStorage.getItem("itemCart")) || [];

window.addEventListener("DOMContentLoaded", function () {
    displaySlider();
    mainUpdateCartCount();
    autoScroll();
});

function autoScroll() {
    const totalWidth = wrapper.scrollWidth;

    setInterval(() => {
        if (wrapper.scrollLeft <= totalWidth) {
            wrapper.scrollLeft += 500;
        } else {
            wrapper.scrollLeft = 0;
        }

        console.log(wrapper.scrollLeft, wrapper.offsetWidth, totalWidth);
    }, 2000);
}

function displaySlider() {
    itemData.forEach(function (el) {
        let createImgDom = document.createElement("img");

        createImgDom.classList = "slideItems";
        createImgDom.id = el.id;
        createImgDom.src = el.img;
        wrapper.appendChild(createImgDom);

        createImgDom.addEventListener("click", function () {
            console.log(el.name);
        });
    });
}

function mainUpdateCartCount() {
    let totalItemCount = currCartBasket.reduce(function (curr, next) {
        return curr + next.countItem;
    }, 0);
    disiplayCart.textContent = totalItemCount;
}

function displayMenuCard() {
    const itemCard = document.createElement("a");

    linkData.forEach(function (el) {
        itemCard.href = el;
    });

    itemCard.classList = "item-card";

    const cardName = document.createElement("div");

    cardName.classList = "item-card-name";
}
