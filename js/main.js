import { bottomMenu } from "./bottom.js";
import { FAQ } from "./faq.js";
import { hamburger } from "./hamburger.js";
import { clickMenu } from "./menu.js";

if (document.body.dataset.page === 'faq') {
    FAQ();
}

hamburger();
bottomMenu();
clickMenu();