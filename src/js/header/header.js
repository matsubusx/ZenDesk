const fixHeader = () => {
    const header = document.querySelector('.header');
    const headerHeight = header.clientHeight;
    const headerMisc = header.querySelector('.misc');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        
        if (scrollTop > 1) {
            header.classList.add('header-fix');
            document.querySelector('main').style.paddingTop = headerHeight + "px";
        } else {
            header.classList.remove('header-fix');
            document.querySelector('main').style.paddingTop = 0
        }

        if (scrollTop > 300) {
            header.classList.add('header-scrolled');
            headerMisc.style.visibility = 'hidden';
        } else {
            header.classList.remove('header-scrolled');
            headerMisc.style.visibility = 'visible';
        }
    })
};

export default fixHeader;