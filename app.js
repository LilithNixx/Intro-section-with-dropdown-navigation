//<li> features and company:
const feature = document.getElementById('features');
const company = document.getElementById('company');
//submenus:
const featuresUl = document.getElementById('features-ul');
const companyUl = document.getElementById('company-ul');
//arrows next to the <li>:
const iconArrowF = document.querySelector('.icon-arrowF');
const iconArrowC = document.querySelector('.icon-arrowC');
//menu-icons:
const menuIcon = document.querySelector('.menu-icon');
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

menuIcon.addEventListener('click', () => {
    const menuIcon2 = document.querySelector('.menu-icon i');
    console.log(menuIcon2.className);
    if (menuIcon2.className === 'bi bi-list'){
        nav.className = 'nav-visible'; //nav becomes visible
        menuIcon2.className = 'bi bi-x-square';
    } else if (menuIcon2.className === 'bi bi-x-square'){
        nav.classList.remove = 'nav-visible';
        menuIcon2.className = 'bi bi-list';
    }
});

