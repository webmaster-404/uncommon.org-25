const darkMode = () => {
    const headerSun = document.querySelector('.header__sun')
    const theme = localStorage.getItem('theme')
    theme && document.body.classList.toggle('light-mode')

    headerSun.addEventListener('click', () => {
        document.body.classList.toggle('light-mode')
        if(document.body.classList.contains('light-mode')){
            localStorage.setItem('theme', 'light-mode')
        }else{
            localStorage.removeItem('theme')
            document.body.removeAttribute('class')
        }
    })
}

export default darkMode