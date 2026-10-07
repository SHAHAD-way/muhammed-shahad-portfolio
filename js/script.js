/* =========================================================
   INITIALIZE LUCIDE ICONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    lucide.createIcons();

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuBtn =
    document.getElementById("mobile-menu-btn");

const mobileMenu =
    document.getElementById("mobile-menu");


if (mobileMenuBtn && mobileMenu) {

    mobileMenuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

        const isOpen =
            mobileMenu.classList.contains("active");

        mobileMenuBtn.innerHTML = isOpen
            ? '<i data-lucide="x"></i>'
            : '<i data-lucide="menu"></i>';

        lucide.createIcons();

    });


    /* Close menu after clicking a link */

    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            mobileMenuBtn.innerHTML =
                '<i data-lucide="menu"></i>';

            lucide.createIcons();

        });

    });

}


/* =========================================================
   GSAP ANIMATIONS
========================================================= */

if (typeof gsap !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);


    /* Hero animation */

    const heroTimeline = gsap.timeline();

    heroTimeline
        .from(".hero-label", {
            opacity: 0,
            y: 20,
            duration: 0.6
        })

        .from(".hero h1", {
            opacity: 0,
            y: 30,
            duration: 0.8
        }, "-=0.3")

        .from(".hero-description", {
            opacity: 0,
            y: 20,
            duration: 0.6
        }, "-=0.4")

        .from(".hero-buttons", {
            opacity: 0,
            y: 20,
            duration: 0.6
        }, "-=0.3")

        .from(".hero-meta", {
            opacity: 0,
            y: 20,
            duration: 0.5
        }, "-=0.3");


    /* Profile animation */

    gsap.from(".profile-wrapper", {

        opacity: 0,

        x: 40,

        duration: 1,

        delay: 0.3,

        ease: "power2.out"

    });


    /* Section headings */

    gsap.utils.toArray(".section-heading").forEach(heading => {

        gsap.from(heading, {

            scrollTrigger: {
                trigger: heading,
                start: "top 85%"
            },

            opacity: 0,

            y: 25,

            duration: 0.7

        });

    });


    /* About cards */

    gsap.utils.toArray(".about-card").forEach((card, index) => {

        gsap.from(card, {

            scrollTrigger: {
                trigger: card,
                start: "top 88%"
            },

            opacity: 0,

            x: 25,

            duration: 0.6,

            delay: index * 0.08

        });

    });


    /* Skills */

    gsap.utils.toArray(".skill-card").forEach((card, index) => {

        gsap.from(card, {

            scrollTrigger: {
                trigger: card,
                start: "top 88%"
            },

            opacity: 0,

            y: 25,

            duration: 0.5,

            delay: index * 0.06

        });

    });


    /* Projects */

    gsap.utils.toArray(".project-card").forEach((card, index) => {

        gsap.from(card, {

            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            },

            opacity: 0,

            y: 35,

            duration: 0.7,

            delay: index * 0.1

        });

    });


    /* Experience */

    gsap.from(".experience-card", {

        scrollTrigger: {
            trigger: ".experience-card",
            start: "top 85%"
        },

        opacity: 0,

        y: 30,

        duration: 0.7

    });


    /* Education */

    gsap.utils.toArray(
        ".education-card, .education-small"
    ).forEach((card, index) => {

        gsap.from(card, {

            scrollTrigger: {
                trigger: card,
                start: "top 90%"
            },

            opacity: 0,

            x: -20,

            duration: 0.5,

            delay: index * 0.08

        });

    });


    /* Contact */

    gsap.from(".contact-box", {

        scrollTrigger: {
            trigger: ".contact-box",
            start: "top 85%"
        },

        opacity: 0,

        scale: 0.97,

        duration: 0.8

    });

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".desktop-nav a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});