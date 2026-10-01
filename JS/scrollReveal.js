document.addEventListener("DOMContentLoaded", () => {
    const revealEls = document.querySelectorAll(".reveal, .reveal-left, .reveal-up");
    if (!revealEls.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealEls.forEach((el) => observer.observe(el));
});