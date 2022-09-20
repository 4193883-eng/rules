adminButton = document.querySelector('.admin')
adminText = document.querySelector('.foo')
adminButton.addEventListener('click',() => {
    if (adminText.style.display == 'none') {
        adminButton.innerText = 'Сховати правила адміністраторів'
        adminText.style.display = 'block'
    }else if (adminText.style.display = 'block'){
        adminButton.innerText = 'Показати правила адміністраторів'
        adminText.style.display = 'none'
    }
})
rightsButton = document.querySelector('.couscous')
rightsText = document.querySelector('.bar')
rightsButton.addEventListener('click',() => {
    if (rightsText.style.display == 'none') {
        rightsButton.innerText = 'Сховати права користувачів'
        rightsText.style.display = 'block'
    }else if (rightsText.style.display = 'block'){
        rightsButton.innerText = 'Показати права користувачів'
        rightsText.style.display = 'none'
    }
})