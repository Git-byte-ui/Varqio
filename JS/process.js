const processLine = document.querySelector(".process-line");
const processSteps = document.querySelectorAll(".process-step");

if (processLine) {
    const observer = new IntersectionObserver((entries, obs) => {
        if (entries[0].isIntersecting) {
            processLine.classList.add("visible");

            processSteps.forEach((step, index) => {
                setTimeout(() => step.classList.add("visible"), index * 200);
            });

            obs.disconnect();
        }
    }, { threshold: 0.15 });

    observer.observe(processLine);
}