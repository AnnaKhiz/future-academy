export function callAddressMenu() {
    const addressBtn = document.getElementById('address-menu');
    const submenuHeader = document.getElementById('submenu-header');
    const closeMenuBtn = document.getElementById('close-menu');
    addressBtn.addEventListener('click', (e) => {
        e.preventDefault();
        submenuHeader.classList.toggle('hidden')
    });
    closeMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        submenuHeader.classList.toggle('hidden')
    })
}