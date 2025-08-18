// Pequenas animações de entrada
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero .text");
  heroText.style.opacity = "0";
  heroText.style.transform = "translateX(-50px)";

  setTimeout(() => {
    heroText.style.transition = "all 1s ease";
    heroText.style.opacity = "1";
    heroText.style.transform = "translateX(0)";
  }, 200);

  // Animação dos botões
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
    btn.addEventListener("mouseover", () => {
      btn.style.transform = "scale(1.1)";
    });
    btn.addEventListener("mouseout", () => {
      btn.style.transform = "scale(1)";
    });
  });
});
