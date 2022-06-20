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

