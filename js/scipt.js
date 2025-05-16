const open = document.getElementById('open')
const close = document.getElementById('close')

function openNavbar(){
    document.querySelector('.navbar__right').style.top = '0%'
}

function closeNavbar(){
    document.querySelector('.navbar__right').style.top = '-100%'
}

open.addEventListener('click', () => {
    openNavbar()
})

close.addEventListener('click', () => {
    closeNavbar()
})

document.querySelectorAll('.navbar a').forEach(link =>{
    link.addEventListener('click', () => {
        closeNavbar()
    })
})

let backtop = document.getElementById("backtop");

window.addEventListener("scroll", function() {
    toggleBacktop();
});

function toggleBacktop() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        backtop.style.bottom = "60px";
    }
    else {
        backtop.style.bottom = "-1000px";
    }
}