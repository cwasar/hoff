//меню каталога
import $ from "jquery";

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
$(".carousel").slick({
    dots: true
})


//блок Идеи для вдохновения
const blocks = document.querySelector('.main-ideas-content-blocks')
const block = document.querySelector('.main-ideas-content-block')
blocks.addEventListener('mouseover', showPin)

function showPin(e) {
    let w = block.offsetWidth
    let h = block.offsetHeight
    if(e.target.classList.contains('main-ideas-content-block-pin')){
        e.target.classList.add('active')
        e.target.nextElementSibling.classList.add('active')

        let pinH = e.target.style.top.substring(0, e.target.style.top.length - 1)
        let pinW = e.target.style.left.substring(0, e.target.style.left.length - 1)

        if(pinH < 50){
            e.target.nextElementSibling.style.top = +pinH + 1 + '%'
        } else {
            e.target.nextElementSibling.style.top = +pinH + 1 - (e.target.nextElementSibling.offsetHeight * 100 / h) + '%'
        }
        if(pinW < 50){
            e.target.nextElementSibling.style.left = +pinW + 1 + '%'
        }else {
            e.target.nextElementSibling.style.left = +pinW + 1 - (e.target.nextElementSibling.offsetWidth * 100 / w) + '%'
        }

    }
    if(e.target.tagName === 'IMG'){
        blocks.querySelectorAll('.active').forEach(item => {
            item.classList.remove('active')
        })

    }

}

// blocks.addEventListener('mouseout', (e) => {
//
//     console.log(e.target)
//         if(e.target.classList.contains('active')){
//
//         } else {
//             e.target.classList.remove('active')
//             e.target.nextElementSibling.classList.remove('active')
//         }
//
//
// })
