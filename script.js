// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("myBtn");

    btn.addEventListener("click", function () {
        alert("Hello from JavaScript!");
        document.body.style.backgroundColor = "lightyellow";
    });
});
