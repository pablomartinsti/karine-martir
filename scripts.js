

const myObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting === true) {
            entry.target.classList.add('show')
        } else {
            

        }
    })

})

const elements = document.querySelectorAll('.hidden')

elements.forEach((elements) => myObserver.observe(elements))


