// let data = {
//     nama: "suci",
//     email: "suciper03@gmail.com"
// };

// console.log(JSON.stringify(data));


// let data = new XMLHttpRequest();
// data.onreadystatechange = function () {
//     if (data.readyState == 4 && data.status == 200) {
//         let data = JSON.parse(this.responseText);
//         console.log(data);
//     }
// }
// data.open('GET', 'coba.json', true);
// data.send();


// jQUERY
$.getJSON('coba.json', function (x) {
    console.log(x);
});