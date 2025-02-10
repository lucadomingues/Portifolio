const icon = document.querySelector("#burger");
const menu = document.querySelector("#nav-links");

icon.addEventListener('click', () => {
    menu.classList.toggle('is-active');
});