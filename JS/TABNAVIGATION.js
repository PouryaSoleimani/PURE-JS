let tabLinks = document.querySelectorAll(`#tabs-headers_container a`)
let contentTexts = document.querySelector('#tabs-contents_container a')
let hiddenContents = document.querySelectorAll('#tabs-contents_container a.hidden')

tabLinks.forEach(item => {
  item.addEventListener(`click`, function (e) {
    e.preventDefault()
    // remove selected contents ---------------------------------------------------
    let mustHideContent = document.querySelector(`#tabs-contents_container a.selected`)
    mustHideContent.classList.remove(`selected`)
    // using datasets to connect links and contents -------------------------------
    let DataBox = item.getAttribute(`data-set`)
    let mustShowContent = document.querySelector(`#tabs-contents_container a[data-set="${DataBox}"]`)
    // showing new selected contents ----------------------------------------------
    mustShowContent.classList.add(`selected`)
  })

})