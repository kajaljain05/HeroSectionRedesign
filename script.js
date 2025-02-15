document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".hero-img");

    images.forEach(image => {
        image.addEventListener("mouseover", () => {
            image.style.transform = "scale(1.2)";
            image.style.filter = "grayscale(0)";
        });

        image.addEventListener("mouseout", () => {
            image.style.transform = "scale(1)";
            image.style.filter = "grayscale(1)";
        });
    });
});  

