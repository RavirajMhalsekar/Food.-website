
//to add scroll bar on screen
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function togglemenu(){
    const menutoggle = document.querySelector('.menutoggle');
    menutoggle.classList.toggle('active');
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
}