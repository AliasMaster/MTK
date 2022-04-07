window.addEventListener('scroll', () => {
    if(scrollY > document.querySelector('.nav-bar').getBoundingClientRect().height && scrollY < window.innerHeight*7/10) {
        document.querySelector('.nav-bar').style.top = '-200px'
    } else {
        document.querySelector('.nav-bar').style.top = '0'
        if(scrollY > window.innerHeight*7/10) {
            document.querySelector('.nav-bar').classList.add('scrolled-down')
        } else {
            document.querySelector('.nav-bar').classList.remove('scrolled-down')
        }
    }
})