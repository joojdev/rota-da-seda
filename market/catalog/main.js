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
  },
  {
    image: 'website.png',
    name: 'site super original e criativo',
    price: 0,
    stretch: true
  },
  {
    image: 'alprazolam.jpg',
    name: 'Alprazolam 1mg',
    price: 41.9
  },
  {
    image: 'melatonina.jpg',
    name: 'Melatonina 60 comprimidos',
    price: 34.99
  },
  {
    image: 'bala.jpg',
    name: 'Bala de matar o amiguinho',
    price: 7.99
  },
  {
    image: 'trembolona.png',
    name: 'Bomba pra ficar GRANDÃO',
    price: 89.99
  },
  {
    image: 'ricardo.png',
    name: 'prof ricardo',
    price: -1,
    stretch: true
  },
  {
    image: 'leite-ninho.jpg',
    name: 'gato cheirador de leite ninho',
    price: 0,
    stretch: true
  },
  {
    image: 'gato-miojo.jpg',
    name: 'gato miojo :O (promoção)',
    price: 0,
    stretch: true
  },
  {
    image: 'gato-triste.jpg',
    name: 'gato triste :((',
    price: 0,
    stretch: true
  },
  {
    image: 'gato-incel.jpg',
    name: 'gato incel >:(',
    price: 0,
    stretch: true
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

items.forEach(({ image, name, price, stretch }) => {
  let imageClass = 'image'

  if (stretch) {
    imageClass = 'image stretch'
  }

  const imageElement = createElement('div', null, imageClass, `../../images/${image}`)
  const nameElement = createElement('p', name, 'name')

  let priceTag = 'pode levar'

  if (price > 0) {
    priceTag = `R$${price.toFixed(2)}`.replace('.', ',')
  } else if (price < 0) {
    priceTag = 'não está à venda só achei bonita essa foto'
  }

  const priceElement = createElement('p', priceTag, 'price')

  const buttonElement = createElement('button', 'Comprar')

  const itemElement = createElement('li', null, 'item')
  itemElement.append(imageElement)
  itemElement.append(nameElement)
  itemElement.append(priceElement)
  itemElement.append(buttonElement)

  itemsElement.append(itemElement)
})

if (items.length % 2 == 1) {
  const hiddenElement = createElement('div', null, 'hidden')
  itemsElement.append(hiddenElement)
}