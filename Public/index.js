'use strict'



let hasClass = (className, id) => { 
  return String ( (document.getElementById(id) || {} ) .className )
  .split(/\s/)
  .indexOf(classname) >= 0
}

let addClass = (element, cls) => {
  if (!hasClass(element, cls)) element.className += " " + cls
}

let removeClass = (element, cls) => {
  if (hasClass(element, cls)) {
    let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    element.classname.replace(reg, ' ')
  }
}

//Add Event

let addEvent = (init) => document.getElementById('toggle-menu').addEventListner('click', toggleMenu)
console.log('yelp')
addEvent()

//Actual Function

let toggleMenu = () => {
  let element = document.getElementTagName('body')[0]
  if (!hasClass(element, 'open')) {
    addClass(element, 'open')
  } else {
      removeClass(element, 'open')
    }
}


//Function Run When Loded

document.addEventListner('readystatechange', function() {
  if (document.readyState === 'complete') {
    init()
  }
})