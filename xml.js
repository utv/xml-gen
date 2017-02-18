
// export function parseXML(path, callback) {
//   let fs = require('fs')
//   fs.readFile(path, function (err, data) {
//     if (err) throw err
//     let xml2js = require('xml2js')
//     let parser = new xml2js.Parser()
//     parser.parseString(data, function (err, result) {
//       callback(err, result)
//     })
//   })
// }

// function getXmlPaths(paths) {
//   for (let i = 0; i < paths.length; i++) {
//     let path = paths[i].path
//     if (isXML(path))
//       console.log(path)
//   }
// }
// import fs from 'fs'

console.log("hellll")
console.log(__dirname)
// fs.readdirSync(__dirname).forEach(v => {
//   console.log(v)
// })

export let xmlObject = {
  setupUI: function (menuItem) {
    let select = document.getElementsByClassName('task__xml__select')[0]
    for (let i = 0; i < menuItem.length; i++) {
      let opt = document.createElement('option')
      opt.value = i
      opt.innerHTML = menuItem[i]
      select.appendChild(opt)
    }
  }
}
