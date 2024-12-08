
// script.js
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section h2");

    sections.forEach(section => {
        section.addEventListener("click", () => {
            section.nextElementSibling.classList.toggle("hidden");
        });
    });
});

// CSS for toggling
.hidden {
    display: none;
}
