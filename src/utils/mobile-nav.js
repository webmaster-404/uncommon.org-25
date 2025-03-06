'use strict'

const mobileNav = () => {
    let isMobileNavOpen = false
    const mobileNav = document.querySelector('.mobile-nav')
    const headerBars = document.querySelector('.header__bars')

    headerBars.addEventListener('click', e => {
        isMobileNavOpen = !isMobileNavOpen
        if(isMobileNavOpen){
            mobileNav.style.display = 'flex'
            document.body.style.overflowY = 'hidden'
        }else{
            mobileNav.style.display = 'none'
            document.body.style.overflowY = 'auto'
        }
    })

}


export default mobileNav