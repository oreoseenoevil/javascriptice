const bg = document.getElementById('bg')

window.addEventListener('scroll', () => {
  bg.style.opacity = 1 - +window.pageYOffset/500+''
  bg.style.top = +window.pageYOffset+'px'
  bg.style.backgroundPositionY = - +window.pageYOffset/2+''
})