//toggle icon navbar

//scroll section
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let heigth = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offser && top < offset + heigth){
        navlinks.forEach(link =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*' + id + ']').classList.add('active')
        });
    }
});


