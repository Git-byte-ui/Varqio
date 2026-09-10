const network = document.querySelector(".network");

for (let i = 0; i < 30; i++) {
    const point = document.createElement("div");

    point.classList.add("point");

    point.style.left = Math.random() * 100 + "%";
    point.style.top = Math.random() * 100 + "%";

    network.appendChild(point);
}