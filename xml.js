exports.listXMLFiles = function (files) {
  console.log(typeof files)
  let fs = require('fs')
  let xml2js = require('xml2js')
  var parser = new xml2js.Parser()
  let xmlFiles = [];

  for (var i = 0; i < files.length; i++) {
    let file = files[i].path
    console.log(typeof file)
    console.log('file = ' + file)
    // fs.readFile(file, function (err, data) {

    //   if (err) throw err
    //   parser.parseString(data, function (err, result) {
    //     if (err) { }
    //     else {
    //       xmlFiles.push(file)
    //     }
    //   })
    // })
  }
  
  return files
};

