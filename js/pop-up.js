const $openPopUpBtns = document.querySelectorAll('[data-open-target]');
const $closePopUpBtns = document.querySelectorAll('[data-close-target]')
const $overlay = document.querySelector('.overlay')

const openPopUp = target => {
    $overlay.classList.add('active')
    target.classList.add('active')
}

const closePopUp = target => {
    $overlay.classList.remove('active')
    target.classList.remove('active')
}

$openPopUpBtns.forEach(val => {
    val.addEventListener('click', e => {
        const target = document.querySelector(val.dataset.openTarget)
        openPopUp(target)
    })
})

$closePopUpBtns.forEach(val => {
    val.addEventListener('click', e => {
        const target = val.closest('.pop-up')
        closePopUp(target)
    } )
})

$overlay.addEventListener('click', e => {
    const target = document.querySelector('.pop-up.active')
    closePopUp(target)
})