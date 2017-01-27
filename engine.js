'use strict';

function readFilesAndDirs() {
  // var fs = require('fs');

  // var files = fs.readdirSync(process.cwd());
  // files.forEach(function (element) {
  //   alert(element);
  // }, this)
}

function testButtonClicked() {
  var button = document.querySelector('.form__button');
  // button.addEventListener('click', function () {
  //   // alert('hey');
  //   var fileAndDirs = readFilesAndDirs();
  // });
}

function fileChosen() {
  let chooser = document.querySelector('input[type=file]');
  chooser.addEventListener('change', function() {
    let fs = require('fs');
    
    let numDir = 0;
    let numFile = 0;
    let files = this.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (fs.lstatSync(files[i].path).isDirectory()) 
        console.log('dir = ' + files[i].path + '\n');
      else
        console.log('file = ' + files[i].path + '\n');
    }
  });
  
}

window.onload = function () {
  console.log('Hello \n' );
  testButtonClicked();
  fileChosen();
};
