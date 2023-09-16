export function callAddressMenu() {
    const addressBtn = [...document.querySelectorAll('[data-header-link="address"]')];
    const submenuHeader = [...document.querySelectorAll('[data-city-list="submenu-header"]')];
    console.log(addressBtn)
    console.log(submenuHeader)
    const closeLink = [...document.querySelectorAll('[data-close-link="header-sub-close"]')];
    console.log(closeLink)
    // const closeMenuBtn = [...document.querySelectorAll('close-menu')];
    // const contactsLink = document.querySelector('.header__container-contacts-link');

    function showHideMenu (button) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            submenuHeader.forEach((e) => {
                e.classList.toggle('hidden');
            })
            // submenuHeader.classList.toggle('hidden');
            // contactsLink.classList.toggle('colored-line');
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

    // submenuHeader.forEach((e) => {
    //     showHideMenu (e)
    // });
    // showHideMenu (addressBtn)
    // showHideMenu (closeMenuBtn)
}