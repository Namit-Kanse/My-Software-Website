// Complete code for services.js
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. REGISTER THE PLUGIN ---
    // This must be called ONCE at the top.
    gsap.registerPlugin(ScrollTrigger);

    // --- 2. ANIMATE SERVICE SECTION 1 (DESKTOP APPS) ---
    
    // Select the first section (the one that is NOT reversed)
    const serviceSection1 = document.querySelector(".service-detail:not(.layout-reversed)");

    // We check if it exists first, just in case
    if (serviceSection1) {
        gsap.to(serviceSection1.querySelector(".service-detail-image"), {
            scrollTrigger: {
                trigger: serviceSection1, // Trigger on this specific section
                start: "top 70%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0, // <-- CHANGED from x: 0
            duration: 0.8,
            ease: "power3.out"
        });

        gsap.to(serviceSection1.querySelector(".service-detail-text"), {
            scrollTrigger: {
                trigger: serviceSection1,
                start: "top 70%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0, // <-- CHANGED from x: 0
            duration: 0.8,
            ease: "power3.out",
            delay: 0.2
        });
    }

    // --- 3. ANIMATE SERVICE SECTION 2 (WEB DEV) ---
    
    // Select the second section (the one WITH the 'layout-reversed' class)
    const serviceSection2 = document.querySelector(".layout-reversed");

    if (serviceSection2) {
        gsap.to(serviceSection2.querySelector(".service-detail-image"), {
            scrollTrigger: {
                trigger: serviceSection2,
                start: "top 70%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0, // <-- CHANGED from x: 0
            duration: 0.8,
            ease: "power3.out"
        });

        gsap.to(serviceSection2.querySelector(".service-detail-text"), {
            scrollTrigger: {
                trigger: serviceSection2,
                start: "top 70%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0, // <-- CHANGED from x: 0
            duration: 0.8,
            ease: "power3.out",
            delay: 0.2
        });
    }


    // --- 4. ANIMATE SERVICE SECTION 3 (MOBILE APPS) ---
    
    // Select the third section using the new class we added
    const serviceSection3 = document.querySelector(".service-section-3");

    if (serviceSection3) {
        gsap.to(serviceSection3.querySelector(".service-detail-image"), {
            scrollTrigger: {
                trigger: serviceSection3,
                start: "top 70%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0, // <-- CHANGED from x: 0
            duration: 0.8,
            ease: "power3.out"
        });

        gsap.to(serviceSection3.querySelector(".service-detail-text"), {
            scrollTrigger: {
                trigger: serviceSection3,
                start: "top 70%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0, // <-- CHANGED from x: 0
            duration: 0.8,
            ease: "power3.out",
            delay: 0.2
        });
    }

    // --- 5. ANIMATE SERVICE SECTION 4 (CLOUD SOLUTIONS) ---
    
    // Select the fourth section using the new class we added
    const serviceSection4 = document.querySelector(".service-section-4");

    if (serviceSection4) {
        gsap.to(serviceSection4.querySelector(".service-detail-image"), {
            scrollTrigger: {
                trigger: serviceSection4,
                start: "top 70%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0, // <-- CHANGED from x: 0
            duration: 0.8,
            ease: "power3.out"
        });

        gsap.to(serviceSection4.querySelector(".service-detail-text"), {
            scrollTrigger: {
                trigger: serviceSection4,
                start: "top 70%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0, // <-- CHANGED from x: 0
            duration: 0.8,
            ease: "power3.out",
            delay: 0.2
        });
    }

}); // End of DOMContentLoaded