document.addEventListener("DOMContentLoaded", function () {
    function toggleOverlay(overlayId) {
        const overlay = document.getElementById(overlayId);
        overlay.classList.toggle("hide");
    }

    function containerClickHandler(containerId, overlayId) {
        const container = document.getElementById(containerId);
        if (!container.classList.contains("closed")) {
            toggleOverlay(overlayId);
        }
    }

    document.getElementById("luke_en").addEventListener("click", function () {
        containerClickHandler("luke_en", "overlay_en");
    });

    document.getElementById("luke_to").addEventListener("click", function () {
        containerClickHandler("luke_to", "overlay_to");
    });

    document.getElementById("luke_tre").addEventListener("click", function () {
        containerClickHandler("luke_tre", "overlay_tre");
    });

    document.getElementById("luke_fire").addEventListener("click", function () {
        containerClickHandler("luke_fire", "overlay_fire");
    });
});