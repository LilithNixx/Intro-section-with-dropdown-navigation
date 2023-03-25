//<li> features and company:
const feature = document.getElementById('features');
const company = document.getElementById('company');
//submenus:
const featuresUl = document.getElementById('features-ul');
const companyUl = document.getElementById('company-ul');
//arrows next to the <li>:
const iconArrow = document.querySelector('icon-arrow');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
//menu-icons:
const menuIcon = document.querySelector('.menu-icon');
//navegation:
const nav = document.querySelector('.nav');

//When clicking on features <li>, the submenu should open or close:
feature.addEventListener('click', () => {

    featuresUl.classList.toggle('submenu-active');

    if (featuresUl.classList === 'submenu-active') {

        companyUl.classList.remove('submenu-active');
    }
    
});

//When clicking on company <li>, the submenu should open or close:
company.addEventListener('click', () => {
    
    companyUl.classList.toggle('submenu-active');
   
});


menuIcon.addEventListener('click', () => {
    const menuIcon2 = document.querySelector('.menu-icon i');
    const navText = document.querySelector('.nav-text');
    
    //toggles between nav and nav-visible
    navText.classList.toggle('nav-visible');

    if (menuIcon2.className === 'bi bi-list'){
        menuIcon2.className = 'bi bi-x-square'; //changing to cross icon
    } else if (menuIcon2.className === 'bi bi-x-square'){
        menuIcon2.className = 'bi bi-list'; //changing to hamburguer icon
    } 

});



