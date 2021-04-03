const item = document.querySelector('.item')

let isResizing = false

item.addEventListener('mousedown', mousedown)

function mousedown (e) {
  window.addEventListener('mousemove', mousemove)
  window.addEventListener('mouseup', mouseup)

  let prevX = e.clientX
  let prevY = e.clientY

  function mousemove (e) {
    if (!isResizing) {
      let newX = prevX - e.clientX
      let newY = prevY - e.clientY

      const rect = item.getBoundingClientRect()
      
      item.style.left = rect.left - newX + 'px'
      item.style.top = rect.top - newY + 'px'

      prevX = e.clientX
      prevY = e.clientY
    }
  }

  function mouseup () {
    window.removeEventListener('mousemove', mousemove)
    window.removeEventListener('mouseup', mouseup)
  }
}

const resizers = document.querySelectorAll('.resizer')

let currentResizer

for (let resizer of resizers) {
  resizer.addEventListener('mousedown', mousedown)

  function mousedown (e) {
    currentResizer = e.target
    isResizing = true

    let prevX = e.clientX
    let prevY = e.clientY

    window.addEventListener('mousemove', mousemove)
    window.addEventListener('mouseup', mouseup)

    function mousemove (e) {
      const rect = item.getBoundingClientRect()

      if (currentResizer.classList.contains('se')) {
        item.style.width = rect.width - (prevX - e.clientX) + 'px'
        item.style.height = rect.height - (prevY - e.clientY) + 'px'
      } else if (currentResizer.classList.contains('sw')) {
        item.style.width = rect.width + (prevX - e.clientX) + 'px'
        item.style.height = rect.height - (prevY - e.clientY) + 'px'
        item.style.left = rect.left - (prevX - e.clientX) + 'px'
      } else if (currentResizer.classList.contains('ne')) {
        item.style.width = rect.width - (prevX - e.clientX) + 'px'
        item.style.height = rect.height + (prevY - e.clientY) + 'px'
        item.style.top = rect.top - (prevY - e.clientY) + 'px'
      } else {
        item.style.width = rect.width + (prevX - e.clientX) + 'px'
        item.style.height = rect.height + (prevY - e.clientY) + 'px'
        item.style.top = rect.top - (prevY - e.clientY) + 'px'
        item.style.left = rect.left - (prevX - e.clientX) + 'px'
      }

      prevX = e.clientX
      prevY = e.clientY
    }

    function mouseup () {
      window.removeEventListener('mousemove', mousemove)
      window.removeEventListener('mouseup', mouseup)

      isResizing = false
    }
  }
}