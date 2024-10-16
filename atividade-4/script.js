document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const slideImages = document.querySelectorAll(".slide");
  let index = 0;

  function showNextSlide() {
    index++;
    if (index >= slideImages.length) {
      index = 0; // Reinicia o índice se passar do número de imagens
    }
    const offset = -index * 100; // Calcula o deslocamento em porcentagem
    slides.style.transform = `translateX(${offset}%)`;
  }

  // Chama a função a cada 2 segundos
  setInterval(showNextSlide, 2000);
});
