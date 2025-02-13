document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("backgroundMusic");
    const button = document.getElementById("toggleMusic");
    const heartContainer = document.querySelector(".heart-container");

    // Controlar la música con el botón
    button.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            button.textContent = "🔇 Pause";
        } else {
            music.pause();
            button.textContent = "🔊 Play";
        }
    });

    // Intentar iniciar la música automáticamente
    setTimeout(() => {
        music.play().catch(error => console.log("Autoplay bloqueado"));
    }, 2000);

    // Generar corazones animados
    function createHeart() {
        const heart = document.createElement("img");
        heart.src = "corazon.png";
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500);
});
