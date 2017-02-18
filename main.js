import path from 'path'
import newMain from './new-main';
import { xmlObject } from './xml'
// var fs = require('fs')
import fs from 'fs'
import xml2js from 'xml2js'

function attachOnClick(aEle, taskEle, htmlToLoad) {
  aEle.addEventListener('click', function () {
    sectionEle.innerHTML = htmlToLoad
  })
}

function setupMenu() {
  let menuEle = document.getElementsByClassName('menu')[0]
  const menuItem = ['xml', 'plist', 'image', 'sql']

  // loads elements and events for menu
  for (let i = 0; i < menuItem.length; i++) {
    let url = menuItem[i] + '.html'
    let a = document.createElement('a')
    a.innerText = menuItem[i]

    $(a).on('click', function () {
      $('.task').load(url, function () {
        xmlObject.setupUI(menuItem)
      })
    })

    let li = document.createElement('li')
    li.appendChild(a)
    menuEle.appendChild(li)
  }
}

setupMenu()
