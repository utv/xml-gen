'use strict'
// var $ = require('jQuery')
var $ = require('jQuery');

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

function load() {
  let dir = document.querySelector('input[type=file]');
  let xml2js = require('xml2js')
  let xmlFiles = []
  let files = dir.files
  for (var i = 0; i < files.length; i++) {
    let file = files[i].path
    console.log(typeof file)
    console.log('file = ' + file)
    let fs = require('fs')

  }
  console.log(xmlFiles.length)
}

// function isXML (path, callback) {
//   let fs = require('fs')
//   fs.readFile(path, function (err, data) {
//     if (err) throw err
//     let xml2js = require('xml2js')
//     let parser = new xml2js.Parser()


//     parser.parseString(data, function (err, result) {
//       if (err) {

//       } else {
//         console.log('parseString done' + '\n')
//         callback(err, path)
//       }

//     })
//   })
// }

function createMenu() {
  // let xml = require('./xml.js')
  // console.log(xml.hello)
  // xml.setText(document.getElementById('el'))

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
      $('.task').load(url, function () {
        let select = document.getElementsByClassName('task__xml__select')[0]
        // let select = document.getElementsByClassName('.task__xml__select')[0]
        for (let i = 0; i < 5; i++) {
          let opt = document.createElement('option')
          opt.value = i
          opt.innerHTML = i
          select.appendChild(opt)
        }
      })
    })
  }
}



// function loadUI() {
//   console.log('load UI')
//   if ($('.task__xml__select').length) {
//     var xmlPage = require('./xml.js')
//     let dir = document.querySelector('input[type=file]');
//     let files = dir.files

//     let select = document.getElementsByClassName('task__xml__select')[0]
//   }
// }

function setupUI() {
  createMenu()
  // loadUI()
  // fileChosen()
}

$(document).ready(function () {
  setupUI()

})

