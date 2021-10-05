const login = document.querySelector(".login_btn");
const close = document.querySelector(".close");
const modal = document.querySelector(".modal");

login.addEventListener("click", () => (modal.style.display = "block"));
close.addEventListener("click", () => (modal.style.display = "none"));

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
