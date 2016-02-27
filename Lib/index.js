// 'use strict'
// import $ from 'jquery'
var $ = require('jquery')










$(document).ready(function () {
  var menuLeft = $('.pushmenu-left')
 var nav_list = $('#nav_list')

  $(nav_list).click(function() {
    $(this).toggleClass('active')
    $('.pushmenu-push').toggleClass('pushmenu-push-toright')
    $(menuLeft).toggleClass('pushmenu-open')
  })
})






// const hasClass = (className, id) => { 
//   cl(String((document.getElementById(id) || {}).className ))
//   return String((document.getElementById(id) || {}).className )
//   .split(/\s/)
//   .indexOf(className) >= 0
// }

// const addClass = (element, cls) => {
//   if (!hasClass(element, cls)) element.className += " " + cls
// }

// const removeClass = (element, cls) => {
//   if (hasClass(element, cls)) {
//     let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
//     element.classname.replace(reg, ' ')
//   }
// }

// //Add Event

// const init = () =>  { 
//   // window.addEventListener('load', init)
//   cl('running init')
  
//   const toggle = document.getElementById('toggle-menu')
//   toggle.addEventListener('click', toggleMenu)
// }


// //Actual Function

// const toggleMenu = () => {
//   console.log('running toggleMenu')
//   let element = document.getElementsByTagName('body')[0]
//       console.log('hasCLASS',hasClass(element, 'open'))
//   if (!hasClass(element, 'open')) {
//     addClass(element, 'open')
//   } else {
//       removeClass(element, 'open')
//     }
// }


// //Function Run When Loded

// document.addEventListener('readystatechange', () => {
//   if (document.readyState === 'complete') {
//     cl('document has completed loading', "adding js")
//     init()
//   }
// })

// function cl(thing) { 
//   console.log(thing)
// }