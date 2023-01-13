const wrapper = document.querySelector(".slider-wrapper");
const cardContainer = document.querySelectorAll(".item-card");
const disiplayCart = document.querySelector(".nav-display-cart");

let currCartBasket = JSON.parse(sessionStorage.getItem("itemCart")) || [];

window.addEventListener("DOMContentLoaded", function () {
    displaySlider();
    autoScroll();
    updateCartCount();
});

function autoScroll() {
    const totalWidth = wrapper.scrollWidth;

    setInterval(() => {
        wrapper.scrollLeft = wrapper.scrollLeft + 500;

        if (wrapper.offsetWidth + wrapper.scrollLeft >= totalWidth) {
            wrapper.scrollLeft = 0;
        }
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

function updateCartCount() {
    let totalItemCount = currCartBasket.reduce(function (curr, next) {
        return curr + next.countItem;
    }, 0);
    disiplayCart.textContent = totalItemCount;
}
