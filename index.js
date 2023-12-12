const menuBar = document.getElementById("menu-bar");
const menuLogo = document.getElementById("menu-logo");
const closeMenu = document.getElementById("close-logo");

menuLogo.addEventListener("click", () => {
    menuBar.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
    menuBar.classList.add("hidden");
});

document.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BODY') {
        menuBar.classList.add('hidden');
    }
});