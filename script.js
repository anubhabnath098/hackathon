
'use strict';

const filtersArr = document.querySelectorAll('.filter');
const filters = document.querySelector('.filters');
const allPrd = document.querySelectorAll('.col');

function displayNone(allPrd) {
    allPrd.forEach(el => {
        el.classList.add('none');
    })
}

function display(allprd, cl) {
    allPrd.forEach(el => {
        if (el.classList.contains(cl))
            el.classList.remove('none');
    })

}

filters.addEventListener('click', function (e) {

    if (e.target.tagName === 'INPUT') {
        filtersArr.forEach(el => {
            el.checked = false;
        });
        e.target.checked = true;
        displayNone(allPrd);
        display(allPrd, e.target.getAttribute("data-info"));
    }

});
