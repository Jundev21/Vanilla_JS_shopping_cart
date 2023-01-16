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
    displaySlider();
    autoScroll();
    updateCartCount();
    displayCartItems();
    updateCartCount();
});
