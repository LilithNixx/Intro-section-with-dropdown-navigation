//<li> features and company:
const feature = document.getElementById('features');
const company = document.getElementById('company');
//submenus:
const featuresUl = document.getElementById('features-ul');
const companyUl = document.getElementById('company-ul');
//arrows next to the <li>:
const iconArrowF = document.querySelector('.icon-arrowF');
const iconArrowC = document.querySelector('.icon-arrowC');
//hamburguer and cross icons:
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
//navegation:
const nav = document.querySelector('.nav');

//When clicking on features <li>, the submenu should open or close:
feature.addEventListener('click', () => {
 
    if (featuresUl.style.visibility === 'hidden'){
        
        featuresUl.style.visibility = 'visible';
        iconArrowF.src = "./images/icon-arrow-down.svg";

    } else if (featuresUl.style.visibility === 'visible'){
       
        featuresUl.style.visibility = 'hidden';
        iconArrowF.src = "./images/icon-arrow-up.svg";

    }
});

//When clicking on company <li>, the submenu should open or close:
company.addEventListener('click', () => {
    
    if (companyUl.style.visibility === 'hidden'){
        
        companyUl.style.visibility = 'visible';
        iconArrowC.src = "./images/icon-arrow-down.svg";

    } else if (featuresUl.style.visibility === 'visible'){
       
        companyUl.style.visibility = 'hidden';
        iconArrowC.src = "./images/icon-arrow-up.svg";

    }
});

openMenu.addEventListener('click', () => {
    nav.className = 'nav-visible'; //nav becomes visible
    closeMenu.className = 'close-menu-active'; //cross icon appears
    openMenu.className = 'open-menu-inactive'; //hamburguer icon dessapears
});

closeMenu.addEventListener('click', () => {
    //when cross icon is clicked, the nav desappears
    nav.classList.remove = 'nav-visible';
    closeMenu.classList.remove = 'close-menu-inactive';
});