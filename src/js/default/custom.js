//меню каталога
//jquery fontawsom fancybox


console.log('custom')
const catalog = document.querySelector('.header-catalog')
const cross = document.querySelector('.header-bottom-catalog-btn > span')
const subMenu = document.querySelector('#submenu')
const allMenu = Array.from(document.querySelectorAll('.submenu-item'))


const btnCatalog = document.querySelector('.header-bottom-catalog').addEventListener('click',()=>{
    catalog.classList.toggle('active')
    cross.classList.toggle('active')
    allMenu.forEach(item => {
        if(item.dataset.name === document.querySelector('.header-catalog-main-item').dataset.name){
            item.classList.add('active')
        }else {
            item.classList.remove('active')
        }
    })

})

const menu = document.querySelector('.header-catalog-main').addEventListener('mouseover', (e) => {
    if(e.target.className === 'header-catalog-main-item'){
        let allitems = document.querySelectorAll('.header-catalog-main-item')
        allitems.forEach(item => {
            item.classList.remove('active')
        })
        e.target.classList.add('active')
        subMenu.innerHTML = e.target.innerText
        allMenu.forEach(item => {
            if(item.dataset.name === e.target.dataset.name){
                item.classList.add('active')
            }else {
                item.classList.remove('active')
            }
        })
    }
})

//main-slider
$( document ).ready(function() {
    $(".carousel").slick({
        dots: true,
        prevArrow: '<i class="fa-solid fa-angle-left slick-prev"></i>',
        nextArrow: '<i class="fa-solid fa-angle-right slick-next"></i>'
    })

    //инициализация fancy-box
const fancybox = $('.fancybox')
    fancybox.fancybox()
    if (fancybox.length) {
        // Руссификация
        fancybox.fancybox({
            lang: 'ru',
            i18n: {
                'ru': {
                    CLOSE: 'Закрыть',
                    NEXT: 'Следующий',
                    PREV: 'Предыдущий',
                    ERROR: 'Запрошенное содержимое не может быть загружено. <br>Пожалуйста, повторите попытку позже.',
                    PLAY_START: 'Запуск слайд-шоу',
                    PLAY_STOP: 'Остановить слайд-шоу',
                    FULL_SCREEN: 'На весь экран',
                    THUMBS: 'Миниатюры',
                    DOWNLOAD: 'Скачать',
                    SHARE: 'Поделиться',
                    ZOOM: 'Приблизить'
                }
            }
        })
    }




})








//блок Идеи для вдохновения
const blocks = document.querySelector('.main-ideas-content-blocks')
const block = document.querySelector('.main-ideas-content-block')
blocks.addEventListener('mouseover', showPin)

function showPin(e) {
    let w = block.offsetWidth,
        h = block.offsetHeight

    if (e.target.classList.contains('main-ideas-content-block-pin')) {
        e.target.classList.add('active')
        e.target.nextElementSibling.classList.add('active')

        let pinH = parseInt(e.target.style.top.substring(0, e.target.style.top.length - 1)) || 0
        let pinW = parseInt(e.target.style.left.substring(0, e.target.style.left.length - 1)) || 0

        if (pinH < 50) {
            e.target.nextElementSibling.style.top = +pinH + 1 + '%'
        } else {
            e.target.nextElementSibling.style.top = +pinH + 1 - (e.target.nextElementSibling.offsetHeight * 100 / h) + '%'
        }
        if (pinW < 50) {
            e.target.nextElementSibling.style.left = +pinW + 1 + '%'
        } else {
            e.target.nextElementSibling.style.left = +pinW + 1 - (e.target.nextElementSibling.offsetWidth * 100 / w) + '%'
        }

    }
    if(e.target.tagName === 'IMG'){
        blocks.querySelectorAll('.active').forEach(item => {
            item.classList.remove('active')
        })

    }

}



//фиксируем шапку при прокрутке и смещаем кнопку каталога
console.log(window.pageYOffset)
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-center')
    const search = document.querySelector('.header-center-content-logo')
    const btn = document.querySelector('.header-bottom-catalog-btn')
    const back = document.querySelector('.header-bottom-catalog')

    if(window.pageYOffset > 45){

        header.style.position = 'fixed'
        header.style.width = '100%'
        header.style.zIndex = 1000
        search.after(btn)
    } else {
        header.style.position = 'relative'
        back.prepend(btn)
    }
})

