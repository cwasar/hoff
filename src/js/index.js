console.log('sdfsasdasddf')
import * as $ from 'jquery'
import '../styles/styles.css'
import '../styles/sass.sass'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/img.png'
import '../assets/logo.jpg'

//burger menu

const catalog = document.querySelector('.header-catalog')
const cross = document.querySelector('.header-bottom-catalog-btn > span')

const btnCatalog = document.querySelector('.header-bottom-catalog').addEventListener('click',()=>{
    catalog.classList.toggle('active')
    cross.classList.toggle('active')

})

const menu = document.querySelector('.header-catalog-main').addEventListener('mouseover', (e) => {
    if(e.target.className === 'header-catalog-main-item'){
        let allitems = document.querySelectorAll('.header-catalog-main-item')
        allitems.forEach(item => {
            item.classList.remove('active')
        })
        e.target.classList.add('active')

    }
})
