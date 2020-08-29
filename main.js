const menu = document.querySelector('.ham-menu'); 
const nav = document.querySelector('.mobile-nav');
const dashes = document.querySelectorAll('.dash');

document.querySelectorAll('.post').forEach( a => a.addEventListener('click', () => document.location.href = 'post.html'))

menu.addEventListener('click', () => {

    let navOpen = menu.classList.contains('nav-open')

    if (!navOpen) {
        nav.style.top = '0'
        nav.style.marginBottom = '0'
        menu.classList.remove('nav-close')
        menu.classList.add('nav-open')
        dashes[0].style.transform = 'rotate(34deg)'
        dashes[1].style.left = '-30px'
        dashes[2].style.transform = 'rotate(-34deg)'
    } 
            
    if (navOpen) {
        nav.style.top = '-110px'
        nav.style.marginBottom = '-110px'
        menu.classList.add('nav-close')
        menu.classList.remove('nav-open')
        dashes[0].style.transform = 'rotate(0deg)'
        dashes[1].style.left = '0'
        dashes[2].style.transform = 'rotate(-0deg)'

    }
})

document.querySelectorAll('.pop_up').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelector('.contact').style.top = `${window.scrollY}px`
        document.querySelector('.contact').style.height = '100vh'
        document.querySelector('body').style.overflowY = 'hidden'
    })
})

window.addEventListener('scroll', () => {
    document.querySelector('.contact').style.top = `${window.scrollY}px`
})

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.contact').style.height = '0'
    document.querySelector('body').style.overflowY = 'visible'
})
