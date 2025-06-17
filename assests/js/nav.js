const button = document.getElementById("menu-button");
const menu = document.getElementById("dropdown-menu");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Optional: close dropdown if clicked outside
document.addEventListener("click", (e) => {
  if (!button.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.add("hidden");
  }
});
