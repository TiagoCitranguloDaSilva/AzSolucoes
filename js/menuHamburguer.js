const menu = document.getElementById('menu')

let linksNavMenu = document.querySelectorAll('#navMenu a')

linksNavMenu.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu()
    })
});

function showMenu() {
    menu.style.display = "flex"
    document.querySelector('html').style.overflow = "hidden"
}

function closeMenu() {
    document.querySelector('html').style.overflow = "auto"
    menu.style.display = "none"
}