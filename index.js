const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const ampm = document.getElementById('ampm')

function clock () {
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let am = 'AM'

  if (h > 12) {
    h = h - 12
    am = 'PM'
  }

  h = (h < 10) ? '0' + h : h
  m = (m < 10) ? '0' + m : m
  s = (s < 10) ? '0' + s : s

  hour.textContent = h
  minute.textContent = m
  second.textContent = s
  ampm.textContent = am
}

const interval = setInterval(clock, 1000)