// ===== Botão de tema (claro / escuro) =====
// Coloca ou tira a classe "dark" do <html> e guarda a escolha no navegador.
// Os ícones de lua e sol trocam sozinhos pelo CSS.
var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {
    var isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
});


// ===== Menu do celular =====
// Abre e fecha a lista de links quando clica no botão de três risquinhos.
var menuToggleBtn = document.getElementById('menu-toggle');
var menu = document.getElementById('menu');

menuToggleBtn.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('open');
    menuToggleBtn.setAttribute('aria-expanded', isOpen);
});

// Fecha o menu ao clicar em um link
menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.remove('open');
        menuToggleBtn.setAttribute('aria-expanded', false);
    });
});
