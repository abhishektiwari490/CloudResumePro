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
    "%c☁️ CloudOps DeployHub",
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
   HERO 3D PIPELINE SCENE (Three.js)
   Visualizes the deploy pipeline as a live
   3D node network inside the hero orb.
=========================================== */

(function initHero3DScene() {

    const canvas = document.getElementById("hero-3d-canvas");

    if (!canvas || typeof THREE === "undefined") return;

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 7);

    function resizeScene() {

        const size = canvas.parentElement.clientWidth;

        renderer.setSize(size, size, false);
        camera.aspect = 1;
        camera.updateProjectionMatrix();

    }

    const group = new THREE.Group();
    scene.add(group);

    // Pipeline nodes: GitHub -> Actions -> S3 -> CloudFront -> Lambda -> API Gateway -> DynamoDB
    const nodeData = [
        { pos: [-1.8, 1.0, 0.3] },
        { pos: [-0.9, 1.5, -0.5] },
        { pos: [0.1, 0.8, 0.8] },
        { pos: [1.1, 1.3, -0.3] },
        { pos: [1.9, 0.1, 0.5] },
        { pos: [0.9, -0.9, -0.4] },
        { pos: [-0.3, -1.4, 0.4] },
        { pos: [-1.5, -0.6, -0.6] }
    ];

    const edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[1,7],[7,2]];

    const cyan = new THREE.Color(0x00d9ff);
    const violet = new THREE.Color(0x7b61ff);
    const dim = new THREE.Color(0x3a4156);

    const nodeGeo = new THREE.IcosahedronGeometry(0.16, 1);
    const nodeMeshes = [];

    nodeData.forEach((n, i) => {

        const isAccent = i % 3 === 0;
        const color = isAccent ? cyan : (i % 3 === 1 ? violet : dim);

        const mat = new THREE.MeshStandardMaterial({
            color: color,
            emissive: isAccent ? cyan : 0x000000,
            emissiveIntensity: isAccent ? 0.6 : 0,
            roughness: 0.4,
            metalness: 0.5,
            flatShading: true
        });

        const mesh = new THREE.Mesh(nodeGeo, mat);
        mesh.position.set(...n.pos);
        group.add(mesh);
        nodeMeshes.push(mesh);

        const haloGeo = new THREE.IcosahedronGeometry(0.24, 1);
        const haloMat = new THREE.MeshBasicMaterial({
            color: color,
            wireframe: true,
            transparent: true,
            opacity: 0.25
        });

        const halo = new THREE.Mesh(haloGeo, haloMat);
        halo.position.copy(mesh.position);
        group.add(halo);

    });

    const edgeMeta = [];

    edges.forEach(([a, b]) => {

        const pa = new THREE.Vector3(...nodeData[a].pos);
        const pb = new THREE.Vector3(...nodeData[b].pos);
        const curve = new THREE.LineCurve3(pa, pb);
        const tubeGeo = new THREE.TubeGeometry(curve, 6, 0.008, 6, false);

        const tubeMat = new THREE.MeshBasicMaterial({
            color: 0x4a5066,
            transparent: true,
            opacity: 0.5
        });

        group.add(new THREE.Mesh(tubeGeo, tubeMat));
        edgeMeta.push({ a: pa, b: pb });

    });

    const pulseGeo = new THREE.SphereGeometry(0.035, 8, 8);

    const pulses = edgeMeta.map((edge, i) => {

        const mat = new THREE.MeshBasicMaterial({ color: 0x00d9ff });
        const mesh = new THREE.Mesh(pulseGeo, mat);

        mesh.userData = {
            edge: edge,
            t: Math.random(),
            speed: 0.22 + Math.random() * 0.15
        };

        group.add(mesh);
        return mesh;

    });

    scene.add(new THREE.AmbientLight(0x404858, 1.3));

    const key = new THREE.PointLight(0x00d9ff, 2.2, 15);
    key.position.set(3, 2, 4);
    scene.add(key);

    const fill = new THREE.PointLight(0x7b61ff, 1.6, 15);
    fill.position.set(-3, -1, 3);
    scene.add(fill);

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5);
        mouseY = (e.clientY / window.innerHeight - 0.5);
    });

    const clock = new THREE.Clock();

    function animate() {

        requestAnimationFrame(animate);

        const t = clock.getElapsedTime();

        group.rotation.y = t * 0.18 + mouseX * 0.5;
        group.rotation.x = 0.1 + mouseY * 0.25;

        nodeMeshes.forEach((m, i) => {
            m.rotation.x += 0.004;
            m.rotation.y += 0.005;
        });

        pulses.forEach((p) => {

            const d = p.userData;
            d.t += d.speed * 0.016;

            if (d.t > 1) d.t = 0;

            p.position.lerpVectors(d.edge.a, d.edge.b, d.t);
            p.material.opacity = Math.sin(d.t * Math.PI);

        });

        renderer.render(scene, camera);

    }

    resizeScene();
    animate();

    window.addEventListener("resize", resizeScene);
    window.addEventListener("load", () => {
        requestAnimationFrame(() => canvas.classList.add("loaded"));
    });

    requestAnimationFrame(() => canvas.classList.add("loaded"));

})();

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
