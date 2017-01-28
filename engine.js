'use strict'  

function readFilesAndDirs() {
  // var fs = require('fs')

  // var files = fs.readdirSync(process.cwd())
  // files.forEach(function (element) {
  //   alert(element)
  // }, this)
}

function fileChosen() {
  let chooser = document.querySelector('input[type=file]')
  chooser.addEventListener('change', function() {
    const fs = require('fs')
    const path = require('path')
    
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
  let menu = document.querySelector('.form__menu')
  
  let html = ''
  for (let i = 0; i < menuItem.length; i++) {
    let url = menuItem[i] + '.html'
    let a = document.createElement('a');
    a.innerText = menuItem[i]
    a.href = url;
    let li = document.createElement('li')
    li.appendChild(a)
    menu.appendChild(li)
  }

  
}

function setupUI() {
  createMenu()
  // fileChosen()
}

window.onload = function () {
  setupUI()
}

