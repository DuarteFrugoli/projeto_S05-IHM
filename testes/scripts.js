// Alternar exibição do menu
document.getElementById("menu-button").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});

// Alternar Tema Claro
document.getElementById("tema-claro").addEventListener("click", function() {
    document.body.classList.remove("tema-escuro");
    document.body.classList.add("tema-claro");
});

// Alternar Tema Escuro
document.getElementById("tema-escuro").addEventListener("click", function() {
    document.body.classList.remove("tema-claro");
    document.body.classList.add("tema-escuro");
});
