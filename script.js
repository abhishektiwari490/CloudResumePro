/* ===========================================
   CLOUDRESUME PRO - MAIN SCRIPT
=========================================== */

// ================================
// TYPING ANIMATION
// ================================

document.addEventListener("DOMContentLoaded", function () {

    if (typeof Typed !== "undefined") {
        new Typed("#typing-text", {
            strings: [
                "Cloud & DevOps Engineer",
                "AWS Cloud Builder",
                "Infrastructure as Code Enthusiast",
                "Android & Backend Developer"
            ],
            typeSpeed: 55,
            backSpeed: 35,
            backDelay: 1800,
            loop: true
        });
    }

});

// ================================
// ACTIVE NAVBAR LINK
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});

// ================================
// NAVBAR EFFECT ON SCROLL
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(7,11,20,0.95)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,0.25)";
    } else {
        navbar.style.background = "rgba(7,11,20,0.85)";
        navbar.style.boxShadow = "none";
    }

});

// ================================
// HERO ORB PARALLAX
// ================================

const orb = document.querySelector(".hero-orb");

document.addEventListener("mousemove", (e) => {

    if (!orb) return;

    const x = (window.innerWidth / 2 - e.clientX) / 35;
    const y = (window.innerHeight / 2 - e.clientY) / 35;

    orb.style.transform =
        `translate(${-x}px, ${-y}px)`;

});

// ================================
// 3D CARD HOVER EFFECT
// ================================

const tiltCards = document.querySelectorAll(
    ".feature-card, .project-card, .journey-card, .skill-category"
);

tiltCards.forEach(card => {

    card.addEventListener("mousemove", function (e) {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = ((y / rect.height) - 0.5) * -10;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";

    });

});

// ================================
// SCROLL REVEAL ANIMATION
// ================================

const revealItems = document.querySelectorAll(
    ".glass-card, .feature-card, .project-card, .journey-card, .skill-category, .arch-node"
);

revealItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform += " translateY(50px)";
    item.style.transition =
        "all 0.8s cubic-bezier(.2,.65,.3,1)";
});

const revealOnScroll = () => {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {
            item.style.opacity = "1";
            item.style.transform =
                item.style.transform.replace(
                    " translateY(50px)",
                    " translateY(0px)"
                );
        }

    });

};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ================================
// JOURNEY COUNTER ANIMATION
// ================================

const counterSection = document.querySelector("#journey");
const counters = document.querySelectorAll(".journey-card h1");

let counterStarted = false;

function animateCounters() {

    if (!counterSection || counterStarted) return;

    const trigger =
        counterSection.getBoundingClientRect().top;

    if (trigger < window.innerHeight - 150) {

        counterStarted = true;

        counters.forEach(counter => {

            let target = parseInt(
                counter.innerText.replace("+", "")
            );

            let current = 0;

            const increment = Math.max(
                1,
                Math.ceil(target / 30)
            );

            const updateCounter = () => {

                current += increment;

                if (current >= target) {
                    counter.innerText =
                        target + (
                            counter.innerText.includes("+")
                                ? "+"
                                : ""
                        );
                } else {
                    counter.innerText =
                        current + (
                            counter.innerText.includes("+")
                                ? "+"
                                : ""
                        );

                    requestAnimationFrame(updateCounter);
                }

            };

            counter.innerText = "0";
            requestAnimationFrame(updateCounter);

        });

    }

}

window.addEventListener("scroll", animateCounters);
window.addEventListener("load", animateCounters);

// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            e.preventDefault();

            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });
        }

    });

});

// ================================
// TECH BADGE HOVER
// ================================

document.querySelectorAll(
    ".tech-item, .skill-tags span, .project-tech-stack span"
).forEach(item => {

    item.addEventListener("mouseenter", () => {
        item.style.transform = "translateY(-3px)";
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "translateY(0px)";
    });

});

// ================================
// DYNAMIC FOOTER YEAR
// ================================

const copyright =
    document.querySelector(".copyright");

if (copyright) {
    copyright.innerHTML =
        `© ${new Date().getFullYear()} Abhishek Tiwari. All Rights Reserved.`;
}

// ================================
// CONSOLE EASTER EGG
// ================================

console.log(
    "%c☁️ CloudResume Pro",
    "font-size:24px;font-weight:bold;color:#00D9FF;"
);

console.log(
    "%cDesigned & Developed by Abhishek Tiwari",
    "font-size:14px;color:#7B61FF;"
);

console.log(
    "%cAWS • DevOps • Cloud Native • Android",
    "font-size:12px;color:#FFFFFF;"
);
/* ===========================================
   HERO FLOATING ANIMATION
=========================================== */

const floatingCards =
    document.querySelectorAll(".floating-card");

floatingCards.forEach((card, index) => {

    card.animate(
        [
            { transform: "translateY(0px)" },
            { transform: "translateY(-10px)" },
            { transform: "translateY(0px)" }
        ],
        {
            duration: 3000 + (index * 500),
            iterations: Infinity
        }
    );

});
/* ===========================================
   PARTICLE BACKGROUND
=========================================== */

if (typeof tsParticles !== "undefined") {

    tsParticles.load("particles-js", {
        background: {
            color: {
                value: "transparent"
            }
        },

        fpsLimit: 60,

        particles: {
            number: {
                value: 35
            },

            color: {
                value: "#00d9ff"
            },

            links: {
                enable: true,
                color: "#00d9ff",
                opacity: 0.15,
                distance: 150
            },

            move: {
                enable: true,
                speed: 1
            },

            opacity: {
                value: 0.2
            },

            size: {
                value: {
                    min: 1,
                    max: 3
                }
            }
        },

        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab"
                }
            },

            modes: {
                grab: {
                    distance: 150,
                    links: {
                        opacity: 0.4
                    }
                }
            }
        }
    });

}