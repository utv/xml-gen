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
    const fs = require('fs');
    const path = require('path');
    
    let files = this.files;
    if (files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
        console.log('path = ' + files[i].path + 
                    ', dir =' + path.dirname(files[i].path) + 
                    ', base = ' + path.basename(files[i].path) + '\n');
    }
  });
  
}

window.onload = function () {
  console.log('Hello \n' );
  testButtonClicked();
  fileChosen();
};
