// import axios from 'axios';

/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container');
console.log(carouselContainer);
carouselContainer.textContent = 'hello'

const imgArr = [
  '/assets/carousel/mountains.jpeg',
  '/assets/carousel/computer.jpeg',
  '/assets/carousel/trees.jpeg',
  '/assets/carousel/turntable.jpeg'
]


function carouselMaker(arr) {
  const carouselDiv = document.createElement('div')
  const leftButton = document.createElement('div')
  // const img = document.createElement('img')
  // const img1 = document.createElement('img')
  // const img2 = document.createElement('img')
  // const img3 = document.createElement('img')
  // const img4 = document.createElement('img')
  arr.forEach(item => {
    const img = document.createElement('img')
    img.src = arr[item]
    carouselDiv.appendChild(img)
  })
  const rightButton = document.createElement('div')

  carouselDiv.className = 'carousel';
  leftButton.className = 'left-button';
  rightButton.className = 'right-button';


  leftButton.textContent = '<'
  // img.src = imgURL
  // img1.src = arr[0]
  // img2.src = arr[1]
  // img3.src = arr[2]
  // img4.src = arr[3]
  rightButton.textContent = '>'

  carouselDiv.appendChild(leftButton)
  // carouselDiv.appendChild(img)
  // carouselDiv.appendChild(img1)
  // carouselDiv.appendChild(img2)
  // carouselDiv.appendChild(img3)
  // carouselDiv.appendChild(img4)
  carouselDiv.appendChild(rightButton)

  leftButton.addEventListener('click', () => {
    console.log(carouselDiv.classList)
  })

  rightButton.addEventListener('click', () => {
    console.log(carouselDiv.classList)
  })

  console.log(carouselDiv)
  return carouselDiv


}

carouselContainer.appendChild(carouselMaker(imgArr))





// imgArr.forEach(img => {
//   console.log(img);
//   carouselContainer.appendChild(carouselMaker(img))
// })