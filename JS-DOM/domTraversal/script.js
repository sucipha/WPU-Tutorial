// event Handling;
// const close = document.querySelector('.close#1');
// const card = document.querySelector('.card#1');


// close.addEventListener('click', function () {
//     card.style.display = 'none';

// })

//DOM Traversal
// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');

// for (let i = 0; i < close.length; i++) {
// close[i].addEventListener('click', function () {
//     // card[i].style.display = 'none'; bukan dom traversal
//     // close[i].parentElement.style.display = 'none';
// })
// close[i].addEventListener('click', function (e) {
//     e.target.parentElement.style.display = 'none';
// e.preventDefault(); untuk menghilangkan aksi default juga span close menggunakan a href
//         e.stopPropagation();
//     })
// }

// const nama = document.querySelector('.nama');
// console.log(nama.parentElement.parentElement);

// const cards = document.querySelectorAll('.card');
// cards.forEach(function (card) {
//     card.addEventListener('click', function (e) {
//         alert('ok');
//     })
// })

const container = document.querySelector('.container');
container.addEventListener('click', function (e) {
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
    }
})