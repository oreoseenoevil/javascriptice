let number1 = -1.836971987210297e-16
let number2 = 1.555
let number3 = 1.005
let number4 = 1.35555
let scale1 = 2
let scale2 = 2
let scale3 = 2
let scale4 = 3

const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')

document.getElementById('number1').value = number1
document.getElementById('number2').value = number2
document.getElementById('number3').value = number3
document.getElementById('number4').value = number4

function roundNumberV1 (num, scale) {
  if (!('' + num).includes('e')) {
    return +(Math.round(num + 'e+' + scale) + 'e-' + scale)
  } else {
    let arr = ('' + num).split('e')
    let sig = ''
    if (+arr[1] + scale > 0) {
      sig = '+'
    }
    let i = +arr[0] + 'e' + sig + (+arr[1] + scale)
    let j = Math.round(i)
    let k = +(j+ 'e' + scale)

    return k
  }
}

btn1.addEventListener('click', () => {
  let roundedNumber1 = roundNumberV1(number1, scale1)
  let roundedNumber2 = roundNumberV1(number2, scale2)
  let roundedNumber3 = roundNumberV1(number3, scale3)
  let roundedNumber4 = roundNumberV1(number4, scale4)

  document.querySelector('#roundedNumber1').value = roundedNumber1
  document.querySelector('#scale1').textContent = scale1
  document.querySelector('#roundedNumber2').value = roundedNumber2
  document.querySelector('#scale2').textContent = scale2
  document.querySelector('#roundedNumber3').value = roundedNumber3
  document.querySelector('#scale3').textContent = scale2
  document.querySelector('#roundedNumber4').value = roundedNumber4
  document.querySelector('#scale4').textContent = scale4
})

btn2.addEventListener('click', () => {
  let number5 = parseFloat(document.getElementById('number5').value)
  let scale5 = parseFloat(document.getElementById('scale5').value)
  document.getElementById('roundedNumber5').value = roundNumberV1(number5, scale5)
})