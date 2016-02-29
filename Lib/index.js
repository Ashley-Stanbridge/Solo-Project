'use strict'
import $ from 'jquery'


$(document).ready(function () {
  var menuLeft = $('.pushmenu-left')
 var nav_list = $('#nav_list')

  $(nav_list).click(function() {
    $(this).toggleClass('active')
    $('.pushmenu-push').toggleClass('pushmenu-push-toright')
    $(menuLeft).toggleClass('pushmenu-open')
  })
})
