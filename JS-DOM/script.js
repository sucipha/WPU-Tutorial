// DOM Selection
// document.getElementById()->elemen
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'grey' ;
// judul.innerHTML = 'Sandhika Galih';

// document.getElementsByTagName() -> HTMLCollection

// const p = document.getElementsByTagName('p');
// //p[2].style.backgroundColor = 'lightblue' ;
// for( let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue' ;
// }

// const h1 = document.getElementsByTagName('h1')[0];
// const h1 = document.getElementsByTagName('h1');
// h1.style.fontSize = '50px';

// document.getElementsByClassName() -> HTMLCollectio
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'diubah di js';

// document.querySelector() -> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li1 = document.querySelector('section#b ul li:nth-child(2)');
// li1.style.backgroundColor = 'orange';

//----------------------------
// const p = document.querySelector('p');
// p.innerHTML = 'diubah menggunakan js';



// // document.querySelectorAll()
// const pp = document.querySelectorAll('p');
// pp[2].style.backgroundColor = 'lightblue';
//p.innerHTML = 'diubah menggunakan js';


// const sectionb = document.getElementById('b');
// const p4 = sectionb.querySelector('p');
// p4.style.backgroundColor = 'orange';


// const sectionb = document.querySelector('section#b');
// const p4 = sectionb.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'orange';


//------------------------- DOM Manipulation
//--innerHTML
// const judul =  document.getElementById('judul');
// judul.innerHTML = '<em>Sandhika Galih</em>';


// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'HelloWorld';

//--style
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

//--attribut
//sesuatu yang menempel pada element html

// const judul = document.getElementsByTagName('h1')[0];
// const a = document.querySelector('section#a a');
// //judul.setAttribute('name', 'sandhika');
// a.setAttribute('id','link');

// const attA = a.getAttribute('href');
// a.removeAttribute('id');

// const p2 = document.querySelector('.p2');
// //menambahkan / memanipulasi class yang ada
// p2.classList.add('label');
// p2.classList.add('biru-muda');

// document.createElement
// document.createTextNode
// node.appendchild


