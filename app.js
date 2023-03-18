const feature = document.getElementById('features');
const company = document.getElementById('company');

const featuresUl = document.getElementById('features-ul');
const companyUl = document.getElementById('company-ul');

const iconArrowF = document.querySelector('.icon-arrowF');
const iconArrowC = document.querySelector('.icon-arrowC');


feature.addEventListener('click', () => {
 
    if (featuresUl.style.visibility === hidden){
        
        featuresUl.style.visibility = 'visible';
        iconArrowF.src = "./images/icon-arrow-down.svg";

    } else if (featuresUl.style.visibility === 'visible'){
       
        featuresUl.style.visibility = 'hidden';
        iconArrowF.src = "./images/icon-arrow-up.svg";

    }
});

company.addEventListener('click', () => {
    
    if (companyUl.style.visibility === 'hidden'){
        
        companyUl.style.visibility = 'visible';
        iconArrowC.src = "./images/icon-arrow-down.svg";

    } else if (featuresUl.style.visibility === 'visible'){
       
        companyUl.style.visibility = 'hidden';
        iconArrowC.src = "./images/icon-arrow-up.svg";

    }
});