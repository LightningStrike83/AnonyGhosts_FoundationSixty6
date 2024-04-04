import { aboutPartners } from "./modules/about.js";
import { adminScripts } from "./modules/admin.js";
import { blogOne } from "./modules/blog-one.js";
import { blogCreationRecent } from "./modules/blog-recent.js";
import { blogCreationAll } from "./modules/blogAll.js";
import { bottomMenu } from "./modules/bottom.js";
import { careervolunteer } from "./modules/career-volunteer.js";
import { darkModeFix } from "./modules/darkmodebug.js";
import { donateVideo } from "./modules/donate.js";
import { eventInfo } from "./modules/events.js";
import { factsInfo } from "./modules/facts.js";
import { FAQ } from "./modules/faq.js";
import { hamburger } from "./modules/hamburger.js";
import { heroHeader } from "./modules/hero.js";
import { clickMenu } from "./modules/menu.js";
import { services } from "./modules/services.js";
import { submitContact } from "./modules/submit-contact.js";
import { submitNewsletter } from "./modules/submit-newsletter.js";
import { video } from "./modules/video.js";

if (document.body.dataset.page === 'faq') {
    FAQ();
}

if (document.body.dataset.page === 'admin') {
    adminScripts()
}

if (document.body.dataset.page === 'about') {
    aboutPartners()
    video()
}

if (document.body.dataset.page === 'blog') {
    blogCreationRecent()
}

if (document.body.dataset.page === 'blog-archive') {
    blogCreationAll()
}

if (document.body.dataset.page === 'blog-single') {
    blogOne()
}

if (document.body.dataset.page === 'career-volunteer') {
    careervolunteer()
    submitContact()
}

if (document.body.dataset.page === 'contact') {
    submitContact()
}

if (document.body.dataset.page === 'events') {
    eventInfo()
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

hamburger();
bottomMenu();
clickMenu();
submitNewsletter();
darkModeFix()