//меню каталога
//jquery fontawsom fancybox


console.log('custom')
const catalog = document.querySelector('.header-catalog')
const cross = document.querySelector('.header-bottom-catalog-btn > span')
const subMenu = document.querySelector('#submenu')
const allMenu = Array.from(document.querySelectorAll('.submenu-item'))
const mediaQuery = window.matchMedia('(min-width: 800px)')
const overlay = document.querySelector('.overlay')
const btn = document.querySelector('.header-bottom-catalog-btn')
const back = document.querySelector('.header-bottom-catalog')
const header = document.querySelector('.header-center')
const search = document.querySelector('.header-center-content-logo')

//проверка разрешения для переноса кнопки
if (!mediaQuery.matches) {

    search.after(btn)
} else {
    back.prepend(btn)
}



const btnCatalog = document.querySelector('.header-bottom-catalog-btn').addEventListener('click',() => {
    catalog.classList.toggle('active')
    cross.classList.toggle('active')
    overlay.classList.toggle('active')
    if (mediaQuery.matches) {
        let doActive = document.querySelector('.header-catalog-main-item').classList.add('active')
    }
    allMenu.forEach(item => {
        if (item.dataset.name === document.querySelector('.header-catalog-main-item').dataset.name){
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })


})

const menu = document.querySelector('.header-catalog-main').addEventListener('mouseover', (e) => {
    if (e.target.className === 'header-catalog-main-item' && mediaQuery.matches) {
        let allitems = document.querySelectorAll('.header-catalog-main-item')
        allitems.forEach(item => {
            item.classList.remove('active')
        })
        e.target.classList.add('active')
        subMenu.innerHTML = e.target.innerText
        allMenu.forEach(item => {
            if (item.dataset.name === e.target.dataset.name) {
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }
        })
    }
})

//мобильное меню
const mobileSub = document.querySelector('.header-catalog-sub')
const mobileMenu = document.querySelector('.header-catalog-main')
mobileMenu.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
        e.preventDefault()
        mobileMenu.classList.add('active')
        mobileSub.classList.add('active')
        let backBtn = document.createElement('button')
        backBtn.innerHTML = '\t&larr; назад'
        backBtn.classList.add('backBtn')
        mobileSub.insertAdjacentElement('afterbegin', backBtn)
        backBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active')
            mobileSub.classList.remove('active')
            backBtn.remove()
        })
        allMenu.forEach(item => {
            if (item.dataset.name === e.target.dataset.name) {
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }
        })
    }

})


//main-slider

$( document ).ready(function () {
    $(".carousel").slick({
        dots: true,
        prevArrow: '<i class="fa-solid fa-angle-left slick-prev"></i>',
        nextArrow: '<i class="fa-solid fa-angle-right slick-next"></i>'
    })




//main-slider-goods
    $(".carousel-goods").slick({
        dots: false,
        slidesToShow: 5,
        infinite: false,
        prevArrow: '<i class="fa-solid fa-angle-left slick-prev2"></i>',
        nextArrow: '<i class="fa-solid fa-angle-right slick-next2"></i>',
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })


//инициализация fancy-box
// const fancybox = $('.fancybox')
//     fancybox.fancybox()
//     if (fancybox.length) {
//         // Руссификация
//         fancybox.fancybox({
//             lang: 'ru',
//             i18n: {
//                 'ru': {
//                     CLOSE: 'Закрыть',
//                     NEXT: 'Следующий',
//                     PREV: 'Предыдущий',
//                     ERROR: 'Запрошенное содержимое не может быть загружено. <br>Пожалуйста, повторите попытку позже.',
//                     PLAY_START: 'Запуск слайд-шоу',
//                     PLAY_STOP: 'Остановить слайд-шоу',
//                     FULL_SCREEN: 'На весь экран',
//                     THUMBS: 'Миниатюры',
//                     DOWNLOAD: 'Скачать',
//                     SHARE: 'Поделиться',
//                     ZOOM: 'Приблизить'
//                 }
//             }
//         })
//     }

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
    if (e.target.tagName === 'IMG') {
        blocks.querySelectorAll('.active').forEach(item => {
            item.classList.remove('active')
        })

    }

}



//фиксируем шапку при прокрутке и смещаем кнопку каталога
window.addEventListener('scroll', function() {

    if (window.pageYOffset > 45 || !mediaQuery.matches) {
        header.style.position = 'fixed'
        header.style.width = '100%'
        header.style.zIndex = 1000
        search.after(btn)
    } else {
        header.style.position = 'relative'
        back.prepend(btn)
    }
})

