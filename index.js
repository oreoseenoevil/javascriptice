const container = document.getElementById('container')

const circleArr = []
const rows = 15
const cols = 15

for (let i = 0; i < rows; i++) {
  circleArr[i] = []
  for (let j = 0; j < cols; j++) {
    const circle = document.createElement('div')
    circle.classList.add('circle')
    container.appendChild(circle)
    circleArr[i].push(circle)
  }
}

circleArr.forEach((cols, i) => {
  cols.forEach((circle, j) => {
    circle.addEventListener('click', () => {
      growCircle(i, j)
    })
  })
})

function growCircle (i, j) {
  if (circleArr[i] && circleArr[i][j]) {
    if (!circleArr[i][j].classList.contains('grow')) {
      circleArr[i][j].classList.add('grow')

      setTimeout(() => {
        growCircle(i-1, j)
        growCircle(i+1, j)
        growCircle(i, j+1)
        growCircle(i, j-1)
      }, 100)

      setTimeout(() => {
        circleArr[i][j].classList.remove('grow')
      }, 300)
    }
  }
}