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
    
    const menuIconF = document.querySelector('.icon-arrowF');
   
    featuresUl.classList.toggle('submenu-active');
    companyUl.classList.remove('submenu-active');

   if (featuresUl.classList !== 'submenu-active'){
        menuIconF.setAttribute('src', './images/icon-arrow-up.svg');
    } 
    
    if (featuresUl.classList[1] === 'submenu-active') {
        menuIconF.setAttribute('src', './images/icon-arrow-down.svg');
    }
    
});

//When clicking on company <li>, the submenu should open or close:
company.addEventListener('click', () => {
   
    const menuIconC = document.querySelector('.icon-arrowC');
    //opening and closing submenu:
    companyUl.classList.toggle('submenu-active');
    //closing the other menu if this one is clicked:
    featuresUl.classList.remove('submenu-active');
    
    if (companyUl.classList !== 'submenu-active'){
        menuIconC.setAttribute('src', './images/icon-arrow-up.svg');
    } 
    
    if (companyUl.classList[1] === 'submenu-active') {
        menuIconC.setAttribute('src', './images/icon-arrow-down.svg');
    }
    
});

//open-close hamburguer menu:
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



