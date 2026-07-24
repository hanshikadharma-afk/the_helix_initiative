const progress = document.getElementById("progress");
const themeToggle = document.getElementById("themeToggle");

window.addEventListener("scroll", () => {
  const s = document.documentElement;
  const p = (s.scrollTop / (s.scrollHeight - s.clientHeight)) * 100;
  progress.style.width = p + "%";
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.querySelectorAll(".bookmark").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.textContent = btn.textContent === "☆" ? "★" : "☆";
  });
});
