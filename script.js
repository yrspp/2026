document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menu-toggle");

    toggleButton.addEventListener("click", function () {
        this.classList.toggle("open");
    });
});
