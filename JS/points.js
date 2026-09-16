document.addEventListener("DOMContentLoaded", () => {
    const network = document.querySelector(".network");
    if (!network) return;

    const containerWidth = network.offsetWidth;

    // Moins de points sur petit écran, distance minimale plus grande (relativement)
    const pointCount = containerWidth < 500 ? 8 : containerWidth < 900 ? 14 : 20;
    const minDistancePercent = containerWidth < 500 ? 18 : containerWidth < 900 ? 13 : 10;

    const placedPoints = []; // { xPercent, yPercent }

    function isFarEnough(x, y) {
        return placedPoints.every((p) => {
            const dx = p.xPercent - x;
            const dy = p.yPercent - y;
            return Math.sqrt(dx * dx + dy * dy) >= minDistancePercent;
        });
    }

    function findPosition() {
        let x, y;
        let attempts = 0;

        do {
            x = Math.random() * 90 + 5;
            y = Math.random() * 80 + 10;
            attempts++;
        } while (!isFarEnough(x, y) && attempts < 30);

        return { x, y };
    }

    for (let i = 0; i < pointCount; i++) {
        const { x, y } = findPosition();
        placedPoints.push({ xPercent: x, yPercent: y });

        const point = document.createElement("div");
        point.classList.add("point");

        point.style.left = x + "%";
        point.style.top = y + "%";

        const label = document.createElement("span");
        label.classList.add("point-label");

        if (i === 0) {
            point.classList.add("star");
            point.classList.add("active");
            label.textContent = "Pertinent";
        } else {
            label.textContent = "Non pertinent";
        }

        point.appendChild(label);
        network.appendChild(point);

        // Empêche le label de déborder à gauche ou à droite du cadre
        if (x < 15) {
            label.classList.add("label-left");
        } else if (x > 85) {
            label.classList.add("label-right");
        }
    }

    const points = document.querySelectorAll(".point");

    points.forEach((point) => {
        point.addEventListener("click", (e) => {
            e.stopPropagation();

            points.forEach((p) => {
                if (p !== point) p.classList.remove("active");
            });

            point.classList.toggle("active");
        });
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".point")) {
            points.forEach((p) => p.classList.remove("active"));
        }
    });
});