function toggleTheme() { 
    const body = document.body;
    const btn = document.getElementById("mode-btn");
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
        btn.textContent = "🌙 Dark Mode";
    } else {
        btn.textContent = "🌓 Light Mode";
    }
}