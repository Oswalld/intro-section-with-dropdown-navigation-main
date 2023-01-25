const menuBtnFeature = document.querySelector('.features');
const menuFeature = document.querySelector('.menu-features');
const menuArrowFeature = document.querySelector('.features-arrow');
const menuBtnCompany = document.querySelector('.company');
const menuCompany = document.querySelector('.menu-company');
const menuArrowCompany = document.querySelector('.company-arrow');

const ham = document.querySelector('.menu-icon');
const cross = document.querySelector('.cross-icon');
const menuMobile = document.querySelector('.menu-right-mobile');
const menu = document.querySelector('#menu');
const blackBackgroundMenu = document.querySelector('.voile-noir-mobile');

menuMobile.addEventListener("click", () => {
    if (!menu.classList.contains("show")) {
        menu.classList.toggle("show");
        blackBackgroundMenu.classList.toggle("show");
        ham.style.display = 'none';
        cross.style.display = 'flex';
    } else{
        menu.classList.toggle("show");
        blackBackgroundMenu.classList.toggle("show");
        ham.style.display = 'flex';
        cross.style.display = 'none';
    }
})

menuBtnFeature.addEventListener("click", () => {
    menuFeature.classList.toggle("show");
    menuArrowFeature.style.transform += "rotate(180deg)";
    
})

menuBtnCompany.addEventListener("click", () => {
    menuCompany.classList.toggle("show");
    menuArrowCompany.style.transform += "rotate(180deg)";
})

