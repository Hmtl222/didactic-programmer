// Пример: кнопка возврата вверх
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "↑ Наверх";
  scrollBtn.className = "scroll-top-btn";
  document.body.appendChild(scrollBtn);

  scrollBtn.style.position = "fixed";
  scrollBtn.style.bottom = "20px";
  scrollBtn.style.right = "20px";
  scrollBtn.style.padding = "10px 15px";
  scrollBtn.style.background = "#333";
  scrollBtn.style.color = "#fff";
  scrollBtn.style.border = "none";
  scrollBtn.style.borderRadius = "8px";
  scrollBtn.style.cursor = "pointer";
  scrollBtn.style.display = "none";

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
