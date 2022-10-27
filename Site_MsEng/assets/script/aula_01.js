function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function btnscroll() {
    if (window.scrollY === 0) {
        //ocutar o botão
        document.querySelector('.scrollbutton').style.display = 'none';
    } else {
        // mostrar o btn
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}
window.addEventListener('scroll', btnscroll);