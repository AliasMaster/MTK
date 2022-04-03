window.addEventListener('scroll', () => {
    if(scrollY > 100) {
        document.querySelector('.nav-bar').style.backgroundColor = 'rgb(250,250,250, 1)'
    } else {
        document.querySelector('.nav-bar').style.backgroundColor = 'rgb(255, 255, 255, 0.8)'
    }
})