import "./styles.css";

const featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--glow-x", `${x}px`);
    card.style.setProperty("--glow-y", `${y}px`);
  });

  card.addEventListener("pointerleave", () => {
    card.style.removeProperty("--glow-x");
    card.style.removeProperty("--glow-y");
  });
});
