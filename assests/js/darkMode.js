const html = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const iconPath = document.getElementById("icon-path");

// SVG paths for icons
const sunPath =
    "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z";
const moonPath =
    "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z";

// Check saved theme from localStorage
const savedTheme = localStorage.getItem("theme");

// If user has saved preference, use it
// Otherwise default to dark mode
if (savedTheme === "dark" || savedTheme === null) {
    // No saved theme = first visit = force dark mode
    html.classList.add("dark");
    iconPath.setAttribute("d", moonPath);
} else {
    html.classList.remove("dark");
    iconPath.setAttribute("d", sunPath);
}

// Theme toggle button to switch and save preference
themeToggle.addEventListener("click", () => {
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    iconPath.setAttribute("d", isDark ? moonPath : sunPath);
});
