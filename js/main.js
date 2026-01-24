document.addEventListener("DOMContentLoaded", () => {
    // Scroll Reveal Animation
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        observer.observe(section);
    });

    // Console greeting
    console.log("%c Toni & Laura Wedding! 💍", "color: #ff6b6b; font-size: 20px; font-weight: bold;");
});
