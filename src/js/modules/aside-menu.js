export function toggleAsideMenu() {
    const asideMenuButton = document.getElementById('aside-menu-button');
    const asideBlock = document.getElementById('aside-block');

    if (window.screen.width <= 1090) {
        asideBlock.classList.add('hidden');
        asideMenuButton.classList.remove('hidden');
        asideMenuButton.addEventListener('click', (event) => {
            event.preventDefault();
            asideBlock.classList.toggle('hidden');
        });
    }
}