const wrapper = document.querySelector(".slider-wrapper");
const cardContainer = document.querySelectorAll(".item-card-container");
const disiplayCart = document.querySelector(".nav-display-cart");

window.addEventListener("DOMContentLoaded", function () {
    displaySlider();
    autoScroll();
    mainUpdateCartCount();
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

function displayMenuCard() {
    const itemCard = document.createElement("a");

    linkData.forEach(function (el) {
        itemCard.href = el;
    });

    itemCard.classList = "item-card";

    const cardName = document.createElement("div");

    cardName.classList = "item-card-name";
}
