export function callAddressMenu() {
    const addressBtn = [...document.querySelectorAll('[data-header-link="address"]')];
    const submenuHeader = [...document.querySelectorAll('[data-city-list="submenu-header"]')];
    const closeLink = [...document.querySelectorAll('[data-close-link="header-sub-close"]')];

    function showHideMenu (button) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            submenuHeader.forEach((e) => {
                e.classList.toggle('hidden');
            });
        });
    }

    addressBtn.forEach((e) => {
        console.log(e)
        showHideMenu(e)
    });

    closeLink.forEach((e) => {
        console.log(e)
        showHideMenu(e)
    });

}