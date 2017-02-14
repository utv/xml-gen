
(function ($, window, document) {

  var path = './';
  var fs = require('fs');

  var reloadWatcher = fs.watch(path, function () {
    location.reload();
    reloadWatcher.close();
  });

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
          let select = document.getElementsByClassName('task__xml__select')[0]
          for (let i = 2; i < 5; i++) {
            let opt = document.createElement('option')
            opt.value = i
            opt.innerHTML = i
            select.appendChild(opt)
          }
        })
      })

      let li = document.createElement('li')
      li.appendChild(a)
      menuEle.appendChild(li)
    }
  }

  $(function () {
    setupMenu()
  })

}(window.jQuery, window, document));
