import * as flsFunctions from "./modules/functions.js";
import * as header from "./modules/address-menu.js";
import * as video from "./modules/index-play.js";
import * as swiper from "./modules/swiper.js";
import * as burger from "./modules/burger.js";

burger.callBurgerMenu();
flsFunctions.isWebp();
header.callAddressMenu();
if (document.getElementById('index-video-container')) {
    video.hideLayers();
}

if (document.querySelector('.main__index-feedback-swiper')) {
    swiper.swipeIndexSwiper();
    swiper.dragPosition();
    swiper.setBgSize()
}



/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/