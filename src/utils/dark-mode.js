const darkMode = () => {
    const headerSun = document.querySelector('.header__sun')
    const theme = localStorage.getItem('theme')
    theme && document.body.classList.toggle('dark-mode')

    headerSun.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode')
        if(document.body.classList.contains('dark-mode')){
            localStorage.setItem('theme', 'dark-mode')
        }else{
            localStorage.removeItem('theme')
            document.body.removeAttribute('class')
        }
    })
}

export default darkMode