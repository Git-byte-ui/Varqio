const network = document.querySelector(".network");

for (let i = 0; i < 20; i++) {
    const point = document.createElement("div");

    point.classList.add("point");

    point.style.left = Math.random() * 90 + 5 + "%";
    point.style.top = Math.random() * 80 + 10 + "%";

    const label = document.createElement("span");
    label.classList.add("point-label");

    if (i == 0) {
        point.classList.add("star");
        label.textContent = "Pertinent";
    } else {
        label.textContent = "non pertinent";
    }
    
    point.appendChild(label);
    network.appendChild(point);
}