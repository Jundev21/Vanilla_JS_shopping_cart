const wrapper = document.querySelector('.slider-wrapper');

window.addEventListener('DOMContentLoaded', function () {
    displaySlider();
    autoScroll();
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
        let createImgDom = document.createElement('img');

        createImgDom.classList = 'slideItems';
        createImgDom.id = el.id;
        createImgDom.src = el.img;
        wrapper.appendChild(createImgDom);

        createImgDom.addEventListener('click', function () {
            console.log(el.name);
        });
    });
}
