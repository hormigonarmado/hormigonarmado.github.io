var header = document.getElementById('header');  
window.addEventListener('scroll', () => {
    var scroll = window.scrollY;
    if (scroll > 10) {
        header.style.backgroundColor = '#121212';  // Fondo oscuro
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0)';  // Fondo transparente
    }
});

// CARRUSEL
const carousels = document.querySelectorAll(".carousel");
carousels.forEach(carousel => {
    const images = carousel.querySelectorAll(".carousel-item");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    let index = 0;

    function showImage(i) {
        images.forEach(img => img.classList.remove("active"));
        images[i].classList.add("active");
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % images.length;
        showImage(index);
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    });

    setInterval(() => {
        index = (index + 1) % images.length;
        showImage(index);
    }, 3000);
});
