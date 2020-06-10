// const p3 = document.querySelector('.p3');

// function ubahWarna() {
//     p3.style.backgroundcolor = 'lightblue';
// }

// function ubahWarna1() {
//     p2.style.backgroundcolor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarna1;





// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function () {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item baru');
//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
// });

//perbedaan eventhandler dan eventlistener
const p3 = document.querySelector('.p3');
p3.onclick = function () {
    p3.style.backgroundcolor = 'lightblue';
};
p3.onclick = function () {
    p3.style.color = 'red';
};

p3.addEventListener('click', function () {
    p3.style.backgroundcolor = 'lightblue';
});
p3.addEventListener('click', function () {
    p3.style.color = 'red';
});

// daftar event mouse,keyboard,resoutces,focus,view,form,css animation & transition, drag & drop

// mouse event click, dblclick, mouseover

p2.addEventListener('mouseenter', function () {
    p2.style.backgroundcolor = 'lightblue';
});
p2.addEventListener('mouseleave', function () {
    p2.style.backgroundcolor = 'salmon';
});