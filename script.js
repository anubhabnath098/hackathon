'use strict';

const filtersArr = document.querySelectorAll('.filter');
const filters = document.querySelector('.filters');
const allPrd = document.querySelectorAll('.col');


function displayNone(allPrd) {
    allPrd.forEach(el => {
        el.classList.add('none');
    })
}

function display(allPrd, checkArr) {
    allPrd.forEach(el => {
        const productClasses = el.classList;
        if (checkArr.every(cls => productClasses.contains(cls))) {
            el.classList.remove('none');
        }
    });
}


filters.addEventListener('click', function (e) {

    if (e.target.tagName === 'INPUT') {
        const checkArr = [];
        filtersArr.forEach(el => {
            if (el.checked) {
                checkArr.push(el.getAttribute("data-info"));
            }
        });
        console.log(checkArr);
        displayNone(allPrd);
        display(allPrd, checkArr);
    }

});
