let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id +'"]').classList.add('active');
        }
    });
};

window.addEventListener("scroll", function(){
     var header =this.document.querySelector("header");
     header.classList.toggle("sticky", window.scrollY > 0);
})



const spans=document.querySelectorAll('.progress-bar span ');

spans.forEach((span) => {
    span.style.width = span.dataset.width;
   
});