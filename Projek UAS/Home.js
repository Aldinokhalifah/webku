let navbar = document.querySelector(''); // kasih class yyg mau dipakai//

document.querySelector('').onclick = () => { //  kasih id yg mau dipakai
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

let header = document.querySelector(''); // kasih class yyg mau dipakai

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


//DROPDOWN//
let pajak = document.querySelector(); //kasih class yg mau dipakai//

pajak.addEventListener('click', function(){
    window.location.href = '' //kasih nama file yg mau dipakai//
})

let kalkulator = document.querySelector(); //kasih class yg mau dipakai//

kalkulator.addEventListener('click', function(){
    window.location.href = '' //kasih nama file yg mau dipakai//
})

let jenis_pajak = document.querySelector(); //kasih class yg mau dipakai//

jenis_pajak.addEventListener('click', function(){
    window.location.href = '' //kasih nama file yg mau dipakai//
})

let fungsi_pajak = document.querySelector(); //kasih class yg mau dipakai//

fungsi_pajak.addEventListener('click', function(){
    window.location.href = '' //kasih nama file yg mau dipakai//
})

let peraturan_pajak = document.querySelector(); //kasih class yg mau dipakai//

peraturan_pajak.addEventListener('click', function(){
    window.location.href = '' //kasih nama file yg mau dipakai//
})


