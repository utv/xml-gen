'use strict';

function readFilesAndDirs() {
    var fs = require('fs');
    
    var files = fs.readdirSync(process.cwd());
    files.forEach(function(element) {
        alert(element);
    }, this);
}

function testButtonClicked() {
    var button = document.querySelector('.form__button');
    button.addEventListener('click', function() {
        // alert('hey');
        var fileAndDirs = readFilesAndDirs()
    });
}

function fileChosen() {
    var chooser = document.querySelector('.form__file')
    chooser.addEventListener('change', function() {
        
    })
}

window.onload = function() {
    testButtonClicked()
    fileChosen()
};
