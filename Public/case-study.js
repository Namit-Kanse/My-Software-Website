document.addEventListener("DOMContentLoaded", () => {
    
    gsap.registerPlugin(ScrollTrigger);

    // --- 1. ANIMATE OVERVIEW BOXES ---
    gsap.from(".overview-box", {
        scrollTrigger: {
            trigger: ".overview-section",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2
    });

    // --- 2. ANIMATE STORY SECTION ---
    gsap.from(".story-text", {
        scrollTrigger: {
            trigger: ".story-section",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.3
    });

    // --- 3. ANIMATE KEY FEATURES (re-using .value-card) ---
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

    gsap.to(".values-section .value-card", {
        scrollTrigger: {
            trigger: ".values-grid",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2
    });

});