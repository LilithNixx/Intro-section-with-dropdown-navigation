//<li> features and company:
const feature = document.getElementById('features');
const company = document.getElementById('company');
//submenus:
const featuresUl = document.getElementById('features-ul');
const companyUl = document.getElementById('company-ul');
//menu-icons (hamburguer and cross):
const menuIcon = document.querySelector('.menu-icon');
//arrows:
const menuIconF = document.querySelector('.icon-arrowF');
const menuIconC = document.querySelector('.icon-arrowC');
//navegation:
const nav = document.querySelector('.nav');


//When clicking on features <li>, the submenu should open or close:
feature.addEventListener('click', () => {
   
    featuresUl.classList.toggle('submenu-active');
    companyUl.classList.remove('submenu-active');
    menuIconC.setAttribute('src', './images/icon-arrow-up.svg');


   if (featuresUl.classList !== 'submenu-active'){
        menuIconF.setAttribute('src', './images/icon-arrow-up.svg');
    } 
    
    if (featuresUl.classList[1] === 'submenu-active') {
        menuIconF.setAttribute('src', './images/icon-arrow-down.svg');
    }
    
});

//When clicking on company <li>, the submenu should open or close:
company.addEventListener('click', () => {
   
    //opening and closing submenu:
    companyUl.classList.toggle('submenu-active');
    //closing the other menu if this one is clicked:
    featuresUl.classList.remove('submenu-active');
    //and closing its arrow icon:
    menuIconF.setAttribute('src', './images/icon-arrow-up.svg');


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
    

    //toggles between nav-text and nav-visible
    //I want to toggle in the nav but it doesnt work, it brings problems with the size of the nav cause it's not the 50% of the cointainer but of the nav and the same with the shadow
    navText.classList.toggle('nav-visible');

    if (menuIcon2.className === 'bi bi-list'){
        menuIcon2.className = 'bi bi-x-square'; //changing to cross icon
       
    } else if (menuIcon2.className === 'bi bi-x-square'){
        menuIcon2.className = 'bi bi-list'; //changing to hamburguer icon
         
    } 

});



