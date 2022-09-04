const items = [
  {
    image: 'dipirona.png',
    name: 'Dipirona 500mg',
    price: 9.99
  },
  {
    image: 'paracetamol.jpg',
    name: 'Paracetamol 750mg',
    price: 14.99
  },
  {
    image: 'dorflex.jpg',
    name: 'Dorflex 36 comprimidos',
    price: 12.99
  }
]

const itemsElement = document.querySelector('#items')

function createElement(tag, textContent, className, backgroundImage) {
  const element = document.createElement(tag)

  if (textContent) {
    element.textContent = textContent
  }

  if (className) {
    element.className = className
  }

  if (backgroundImage) {
    element.style.backgroundImage = `url('${backgroundImage}')`
  }

  return element
}

items.forEach(({ image, name, price }) => {
  const imageElement = createElement('div', null, 'image', `../../images/${image}`)
  const nameElement = createElement('p', name, 'name')
  const priceElement = createElement('p', `R$${price}`.replace('.', ','), 'price')
  const buttonElement = createElement('button', 'Comprar')

  const itemElement = createElement('li', null, 'item')
  itemElement.append(imageElement)
  itemElement.append(nameElement)
  itemElement.append(priceElement)
  itemElement.append(buttonElement)

  itemsElement.append(itemElement)
})