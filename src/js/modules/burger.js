export function callBurgerMenu() {
    document.addEventListener('DOMContentLoaded', (e) => {
        const menuBtn = document.getElementById('callBurger');
        const menu = document.getElementById('burger');
        const bodyElem = document.querySelector('body');
        const menuContainer = document.getElementById('burger-container');

        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('clicked')
            menu.classList.toggle('show');
            bodyElem.classList.toggle('fixed');
            menuContainer.classList.toggle('scroll');
            menuBtn.classList.toggle('active');
            menu.classList.toggle('active');
        });

        if (window.screen.width <= 768) {
            const headerElem = document.getElementById('header');
            const logoElem = [...document.querySelectorAll('#logo-img>path')];
            console.log(logoElem)
            headerElem.style.backgroundColor = "#00093C";
            logoElem.forEach((e) => {
                e.style.fill = "#ffffff";
            })

        }
    })

}