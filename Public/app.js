// Complete code for app.js
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. HERO TEXT & BUTTON ANIMATION (Runs on Page Load) ---
    const heroContent = document.querySelector('.hero-content');
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(heroContent, { 
        duration: 1, 
        opacity: 1, 
        y: 0, 
        delay: 2.5 // Wait for particle animation
    })
    .from('.hero-headline', { duration: 0.8, opacity: 0, y: 20 }, "-=0.5")
    .from('.hero-subheadline', { duration: 0.8, opacity: 0, y: 20 }, "-=0.6")
    .from('.hero-buttons', { duration: 0.8, opacity: 0, y: 20 }, "-=0.6");

    
    // --- 2. HERO PARTICLE ANIMATION (Runs on Page Load) ---
    // (This is your "Chaos to Clarity" Three.js code. It's unchanged.)
    let scene, camera, renderer, particles, targetObject;
    const numParticles = 6000;

    function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        renderer = new THREE.WebGLRenderer({ 
            canvas: document.getElementById('hero-animation'),
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const particleGeometry = new THREE.BufferGeometry();
        const particlePositions = new Float32Array(numParticles * 3);
        for (let i = 0; i < numParticles * 3; i++) {
            particlePositions[i] = (Math.random() - 0.5) * 10; 
        }
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
        const particleMaterial = new THREE.PointsMaterial({
            color: 0x007BFF,
            size: 0.02
        });
        particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);
        targetObject = new THREE.SphereGeometry(2, 32, 32);
        animateParticles();
    }
    function animateParticles() {
        const positions = particles.geometry.attributes.position.array;
        const targetPositions = targetObject.attributes.position.array;
        for (let i = 0; i < numParticles; i++) {
            const i3 = i * 3;
            const targetIndex = (i % targetPositions.length / 3) * 3;
            gsap.to(positions, {
                duration: 2.5,
                ease: 'power3.inOut',
                [i3]: targetPositions[targetIndex] + (Math.random() - 0.5) * 0.1,
                [i3 + 1]: targetPositions[targetIndex + 1] + (Math.random() - 0.5) * 0.1,
                [i3 + 2]: targetPositions[targetIndex + 2] + (Math.random() - 0.5) * 0.1,
                delay: 0.5
            });
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        if (particles) {
            particles.rotation.y += 0.0005;
        }
        gsap.ticker.tick(); 
        renderer.render(scene, camera);
        if (particles) {
            particles.geometry.attributes.position.needsUpdate = true;
        }
    }
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    init();
    animate();

    
    // --- 3. REGISTER SCROLLTRIGGER ---
    // This is the most important step! We do it ONCE here.
    gsap.registerPlugin(ScrollTrigger);

    
    // --- 4. SERVICES OVERVIEW (Homepage) SCROLL ANIMATION ---
    gsap.to(".services-overview .section-heading", {
        scrollTrigger: {
            trigger: ".services-overview",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out"
    });
    gsap.to(".service-card", {
        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.2
    });

    // --- 5. PORTFOLIO (Homepage) SCROLL ANIMATION ---
    gsap.to(".portfolio .section-heading", {
        scrollTrigger: {
            trigger: ".portfolio",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out"
    });
    gsap.to(".project-card", {
        scrollTrigger: {
            trigger: ".portfolio-grid",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.2
    });

    // --- 6. CONTACT (Homepage) SCROLL ANIMATION ---
    gsap.to(".contact-text", {
        scrollTrigger: {
            trigger: ".contact",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        opacity: 1, x: 0, duration: 0.8, ease: "power3.out"
    });
    gsap.to(".contact-form", {
        scrollTrigger: {
            trigger: ".contact",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.2
    });

    // --- 7. CONTACT FORM SUBMISSION (Add this to app.js) ---
    
    const contactForm = document.getElementById('main-contact-form');
    
    // We'll create a simple message element to show success or error
    const formStatus = document.createElement('p');
    formStatus.style.marginTop = '15px';
    contactForm.appendChild(formStatus);

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop the form from reloading the page
            
            // Show a "sending" message
            formStatus.textContent = 'Sending...';
            formStatus.style.color = 'var(--light-color)';

            // Get the form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };

            // Send the data to your new server
            fetch('http://localhost:3001/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    // Success!
                    formStatus.textContent = 'Message sent successfully! We will get back to you soon.';
                    formStatus.style.color = '#4CAF50'; // Green
                    contactForm.reset(); // Clear the form
                } else {
                    // Failure
                    formStatus.textContent = 'An error occurred. Please try again or email us directly.';
                    formStatus.style.color = '#F44336'; // Red
                }
            })
            .catch((error) => {
                // Network or server error
                console.error('Error:', error);
                formStatus.textContent = 'Server error. Please try again later.';
                formStatus.style.color = '#F44336'; // Red
            });
        });
    }
    
// This should be the last '});' in your app.js file

    
}); // End of DOMContentLoaded