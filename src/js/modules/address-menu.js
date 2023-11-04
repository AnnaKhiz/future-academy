export function callAddressMenu() {
    const addressBtn = [...document.querySelectorAll('[data-header-link="address"]')];
    const submenuHeader = [...document.querySelectorAll('[data-city-list="submenu-header"]')];
    const closeLink = [...document.querySelectorAll('[data-close-link="header-sub-close"]')];
    const contactsLink = document.querySelector('.header__container-contacts-link');

    function showHideMenu (button) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            submenuHeader.forEach((e) => {
                e.classList.toggle('hidden');
            });
            contactsLink.classList.toggle('colored-line');
        });
    }

    addressBtn.forEach((e) => {
        showHideMenu(e)
    });

    closeLink.forEach((e) => {
        showHideMenu(e)
    });

}