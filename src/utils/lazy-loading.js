const lazyloading = () => {
    const lazyImages = document.querySelectorAll(".lazy")
    const observer = new IntersectionObserver((entries, observer) =>{
        entries.forEach(entry => {
            if(entry.isIntersecting){
                let img = entry.target
                img.src = img.dataset.src
                img.classList.remove('loading')
                img.classList.add('loaded')
                observer.observe(img)
            }
        })
    })
    lazyImages.forEach(img => observer.observe(img))
}

export default lazyloading