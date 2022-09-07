const colorList = [
  {
    lightColor: '#c23d4a',
    darkColor: '#dbc953',
    source: 'img1.png'
  },
  {
    lightColor: '#d5a456',
    darkColor: '#c23d4a',
    source: 'img2.png'
  },
  {
    lightColor: '#5bb65b',
    darkColor: '#e1d45d',
    source: 'img3.png'
  }
]

const rootElement = document.querySelector(':root')
const characterElement = document.querySelector('#character')

function changeCharacter(index) {
  const { lightColor, darkColor, source } = colorList[index]

  rootElement.style.setProperty('--light-color', lightColor)
  rootElement.style.setProperty('--dark-color', darkColor)

  characterElement.src = `./images/${source}`
}