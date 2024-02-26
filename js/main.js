import { bottomMenu } from "./bottom.js";
import { factsInfo } from "./facts.js";
import { FAQ } from "./faq.js";
import { hamburger } from "./hamburger.js";
import { clickMenu } from "./menu.js";
import { services } from "./services.js";

if (document.body.dataset.page === 'faq') {
    FAQ();
}

if (document.body.dataset.page === 'services') {
    services();
}

if (document.body.dataset.page === 'home') {
    factsInfo();
}

hamburger();
bottomMenu();
clickMenu();