document.addEventListener("DOMContentLoaded", () => {
    
    gsap.registerPlugin(ScrollTrigger);

    // --- 1. ANIMATE "OUR STORY" SECTION ---
    const storySection = document.querySelector(".service-detail"); // It re-uses this class

    if (storySection) {
        gsap.to(storySection.querySelector(".service-detail-image"), {
            scrollTrigger: {
                trigger: storySection,
                start: "top 70%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0, // <-- CHANGED from x: 0
            duration: 0.8,
            ease: "power3.out"
        });

        gsap.to(storySection.querySelector(".service-detail-text"), {
            scrollTrigger: {
                trigger: storySection,
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

    // --- 2. ANIMATE "CORE VALUES" SECTION ---
    gsap.to(".values-section .section-heading", {
        scrollTrigger: {
            trigger: ".values-section",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
    });

    gsap.to(".value-card", {
        scrollTrigger: {
            trigger: ".values-grid",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2 // Animates cards one by one
    });

});