'use strict'
// var $ = require('jQuery')

function fileChosen() {
  let chooser = document.querySelector('input[type=file]')
  chooser.addEventListener('change', function () {
    let fs = require('fs')
    let path = require('path')

    let files = this.files
    if (files.length === 0) return

    for (let i = 0; i < files.length; i++) {
      console.log('path = ' + files[i].path +
        ', dir =' + path.dirname(files[i].path) +
        ', base = ' + path.basename(files[i].path) + '\n')
    }
  })

}

function createMenu() {
  const menuItem = ['xml', 'plist', 'image', 'sql']
  let menu = document.querySelector('.menu')

  let html = ''
  // loads elements and events for menu
  for (let i = 0; i < menuItem.length; i++) {
    let url = menuItem[i] + '.html'
    let a = document.createElement('a')
    a.innerText = menuItem[i]

    let li = document.createElement('li')
    li.appendChild(a)
    menu.appendChild(li)
    
    $(a).on('click', function () {
      var xmlPage = require('./xml.js')
      let dir = document.querySelector('input[type=file]');
      let files = dir.files
      let data = xmlPage.listXMLFiles(files)
      $('.task').load(url, data, function() {
        // console.log(typeof data)
        // $('.task__xml__select').append('<option val="1">One</option>')
      })
      // $('select').append($('<option>', {value:1, text:'One'}))
      
    })
    
    // a.onclick = function () {
    //   console.log(url)
    //   $('.task').load(url)
    //   loadUI()
    // }
  }


}

function loadUI() {
  console.log('load UI')
  if ($('.task__xml__select').length) {
    var xmlPage = require('./xml.js')
    let dir = document.querySelector('input[type=file]');
    let files = dir.files
    // for (var i = 0; i < files.length; i++) {
    //   console.log(files[i].path + '\n')
    // }

    console.log(typeof xmlPage)
    console.log(typeof xmlPage.listXMLFiles)
    // console.log(typeof document.getElementsByClassName('task__xml__select')[0])
    console.log(typeof $('.task__xml__select'))
    let select = document.getElementsByClassName('task__xml__select')[0]


    // xmlPage.listXMLFiles(select, files)
    // $('task__xml__select')
  }
}

function setupUI() {
  createMenu()
  // loadUI()
  // fileChosen()
}

// window.onload = function () {
//   setupUI()
// }


$(document).ready(function () {
  setupUI()

})

