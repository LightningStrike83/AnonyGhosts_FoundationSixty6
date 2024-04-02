import { bottomMenu } from "./modules/bottom.js";
import { donateVideo } from "./modules/donate.js";
import { factsInfo } from "./modules/facts.js";
import { FAQ } from "./modules/faq.js";
import { hamburger } from "./modules/hamburger.js";
import { heroHeader } from "./modules/hero.js";
import { clickMenu } from "./modules/menu.js";
import { services } from "./modules/services.js";
import { video } from "./modules/video.js";

if (document.body.dataset.page === 'faq') {
    FAQ();
}

if (document.body.dataset.page === 'services') {
    services();
}

if (document.body.dataset.page === 'home') {
    factsInfo();
    video()
    heroHeader()
}

if (document.body.dataset.page === 'donate') {
    donateVideo();
    video()
}

if (document.body.dataset.page === 'about') {
    video()
}

hamburger();
bottomMenu();
clickMenu();