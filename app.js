function navigate(nav_list, menu) {
    const navMenu = document.querySelector(menu);
    const navList = document.querySelector(nav_list);

    navMenu.addEventListener('click', () => {
        navList.classList.toggle('show')
        navList.classList.toggle('trans')
    })
}

navigate('.nav_list', '.menu')

const header = document.querySelector('header');
const position = 90;
window.addEventListener('scroll', () => {
    const scrollPosition = document.documentElement.scrollTop;
    if (scrollPosition > position) {
        header.style.backgroundColor = 'rgba(111, 111, 111, 0.518)'
        header.classList.add('transparent');
    } else {
        header.style.background = 'transparent';
    }
})

