document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", () => {
            navLinks.classList.toggle("open");
            menuButton.classList.toggle("open");
        });
    } else {
        console.error("menu-button ou nav-links introuvable", { menuButton, navLinks });
    }

    // Ferme automatiquement le menu si on repasse en mode desktop (>=1100px)
    const mqDesktop = window.matchMedia("(min-width: 1100px)");

    function handleDesktopChange(e) {
        if (e.matches && menuButton && navLinks) {
            navLinks.classList.remove("open");
            menuButton.classList.remove("open");
        }
    }

    mqDesktop.addEventListener("change", handleDesktopChange);
    handleDesktopChange(mqDesktop);

    // Déplacement de right-navbar selon la largeur d'écran
    const rightNavbar = document.querySelector(".right-navbar");
    const navActions = document.querySelector(".nav-actions");

    if (navLinks && rightNavbar && navActions) {
        const mqSmall = window.matchMedia("(max-width: 749px)");

        function handleBreakpointChange(e) {
            if (e.matches) {
                navLinks.appendChild(rightNavbar);
                rightNavbar.classList.add("in-menu");
            } else {
                navActions.insertBefore(rightNavbar, menuButton);
                rightNavbar.classList.remove("in-menu");
            }
        }

        mqSmall.addEventListener("change", handleBreakpointChange);
        handleBreakpointChange(mqSmall);
    } else {
        console.error("right-navbar ou nav-actions introuvable", { rightNavbar, navActions });
    }

});