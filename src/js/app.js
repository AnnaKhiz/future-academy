import * as flsFunctions from "./modules/functions.js";
import * as back from "./modules/back.js";
import * as header from "./modules/address-menu.js";
import * as video from "./modules/index-play.js";
import * as swiper from "./modules/swiper.js";
import * as burger from "./modules/burger.js";
import * as range from './modules/range-slider.js';
import * as aside from './modules/aside-menu.js';


back.backToPortfolio();
burger.callBurgerMenu();
flsFunctions.isWebp();
header.callAddressMenu();
header.styleActiveLink();
if (document.getElementById('index-video-container')) {
    video.hideLayers();
}

if (document.querySelector('.main__index-feedback-swiper')) {
    swiper.swipeIndexSwiper();
    swiper.dragPosition();
    swiper.setBgSize();
    swiper.dragPositionTeam();
}

if (document.getElementById('slider')) {
    range.rangeSlider();
}
if (document.getElementById('aside-block')) {
    aside.toggleAsideMenu();
}





/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/