"use strict"
//  exports.isXML = function (path, callback) {
//   let fs = require('fs')
//   fs.readFile(path, function (err, data) {
//     if (err) throw err
//     let xml2js = require('xml2js')
//     let parser = new xml2js.Parser()


//     parser.parseString(data, function (err, result) {
//       if (err) {
//         callback(err, path)
//       } else {
//         console.log('parseString done' + '\n')
//         callback(err, path)
//       }

//     })
//   })
// }

exports.parseXML = function(path, callback) {
  let fs = require('fs')
  fs.readFile(path, function (err, data) {
    if (err) throw err
    let xml2js = require('xml2js')
    let parser = new xml2js.Parser()
    parser.parseString(data, function (err, result) {
      callback(err, result)
    })
  })
}

function getXmlPaths(paths) {
  for (let i = 0; i < paths.length; i++) {
     let path = paths[i].path
     if (isXML(path))
      console.log(path)
  }
}
