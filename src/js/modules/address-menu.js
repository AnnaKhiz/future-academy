export function callAddressMenu() {
    const addressBtn = [...document.querySelectorAll('[data-header-link="address"]')];
    const submenuHeader = [...document.querySelectorAll('[data-city-list="submenu-header"]')];
    const closeLink = [...document.querySelectorAll('[data-close-link="header-block-sub-close"]')];
    const contactsLink = document.querySelector('.header-block__container-contacts-link');
    const allCoursesLink = document.querySelector('.header-block__container-all-courses');

    function showHideMenu (button) {
        button.addEventListener('click', (event) => {
            event.preventDefault();
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