document.addEventListener("DOMContentLoaded", function () {
    function toggleOverlay(overlayId) {
        const overlay = document.getElementById(overlayId);
        overlay.classList.toggle("hide");
    }

    function containerClickHandler(containerId, overlay1Id, overlay2Id, overlay3Id) {
        const container = document.getElementById(containerId);
        if (!container.classList.contains("closed")) {
            toggleOverlay(overlay1Id);
            toggleOverlay(overlay2Id);
            toggleOverlay(overlay3Id);
        } else {
            // Add shake animation
            container.classList.add("shake");
            // Remove shake animation
            setTimeout(() => {
                container.classList.remove("shake");
            }, 500);
        }
    }

    document.getElementById("luke_en").addEventListener("click", function () {
        containerClickHandler("luke_en", "overlay_en_en", "overlay_to_en", "overlay_tre_en");
    });

    document.getElementById("luke_to").addEventListener("click", function () {
        containerClickHandler("luke_to", "overlay_en_to", "overlay_to_to", "overlay_tre_to");
    });

    document.getElementById("luke_tre").addEventListener("click", function () {
        containerClickHandler("luke_tre", "overlay_en_tre", "overlay_to_tre", "overlay_tre_tre");
    });

    document.getElementById("luke_fire").addEventListener("click", function () {
        containerClickHandler("luke_fire", "overlay_en_fire", "overlay_to_fire", "overlay_tre_fire");
    });
});