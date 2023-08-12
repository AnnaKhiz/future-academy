export function callAddressMenu() {
    const addressBtn = document.getElementById('address-menu');
    const submenuHeader = document.getElementById('submenu-header');
    const closeMenuBtn = document.getElementById('close-menu');
    const contactsLink = document.querySelector('.header__container-contacts-link ')

    function showHideMenu (button) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            submenuHeader.classList.toggle('hidden');
            contactsLink.classList.toggle('colored-line');
        });
    }

    showHideMenu (addressBtn)
    showHideMenu (closeMenuBtn)
}