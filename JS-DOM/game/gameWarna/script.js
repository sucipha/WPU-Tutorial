const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function () {
    // document.body.style.backgroundColor = 'salmon';
    // document.body.setAttribute('class', 'salmon');
    document.body.classList.toggle('salmon');
};
// tUbah.addEventListener('click')

const tBaruAcak = document.createElement('button');
const textTombol = document.createTextNode('Random Background');
tBaruAcak.appendChild(textTombol);
tBaruAcak.setAttribute('type', 'button');
tUbahWarna.after(tBaruAcak);

tBaruAcak.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


const sMerah = document.querySelector('input[name=sMerah]');
sMerah.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
const sHijau = document.querySelector('input[name=sHijau]');
sHijau.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
const sBiru = document.querySelector('input[name=sBiru]');
sBiru.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


document.body.addEventListener('mousemove', function (e) {
    //posisimouse
    // e.clientX;
    // e.clientY;
    //ukuran browser
    // window.innerWidth;
    // window.innerHeight;
    const xPos = Math.round((e.clientX / window.innerWidth) * 255);
    const yPos = Math.round((e.clientY / window.innerWidth) * 255);
    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',' + 100 + ')';
})