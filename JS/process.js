const processSection = document.querySelector(".HomeProcessus");
const processLine = document.querySelector(".process-line");
const processSteps = document.querySelectorAll(".process-step");

const observer = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting) {

        processLine.classList.add("visible");

        processSteps.forEach((step, index) => {

            setTimeout(() => {
                step.classList.add("visible");
            }, index * 200);

        });

    }

});

observer.observe(processSection);