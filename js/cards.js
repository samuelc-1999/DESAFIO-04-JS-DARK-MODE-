import { cardFire, cardCoffee, cardRain, cardTree } from './variables.js'
import { volumeTree, volumeRain, volumeCoffee, volumeFire} from './variables.js'
export function Cards ({ sound }) {

  function offSondsCards(sound) {
    sound.pauseAudioTree() 
    sound.pauseAudioCoffee()
    sound.pauseAudioRain()
    sound.pauseAudioFire()
    
  
    cardFire.classList.remove('color-fire')
    cardTree.classList.remove('tree-color')
    cardRain.classList.remove('color-rain')
    cardCoffee.classList.remove('color-coffee')

    cardTree.classList.remove('icon')
    cardRain.classList.remove('icon')
    cardCoffee.classList.remove('icon')
    cardFire.classList.remove('icon')

    volumeTree.classList.remove('colorInput')
    volumeRain.classList.remove('colorInput')
    volumeCoffee.classList.remove('colorInput')
    volumeFire.classList.remove('colorInput')
  }



cardTree.addEventListener('click', () => {  
  if(cardTree.classList.contains('tree-color')){
    offSondsCards(sound)
    return
  }

  offSondsCards(sound)
  cardTree.classList.add('tree-color')
  cardTree.classList.toggle('icon')
  volumeTree.classList.toggle('colorInput')
  sound.playAudioTree()

})

cardRain.addEventListener('click', () => { 
  if(cardRain.classList.contains('color-rain')){
    offSondsCards(sound)
    return
  }

  offSondsCards(sound)
  cardRain.classList.add('color-rain')
  cardRain.classList.toggle('icon')
  volumeRain.classList.toggle('colorInput')
  sound.playAudioRain()

})

cardCoffee.addEventListener('click', () => {
  if(cardCoffee.classList.contains('color-coffee')){
    offSondsCards(sound)
    return
  }

  offSondsCards(sound)
  cardCoffee.classList.add('color-coffee')
  cardCoffee.classList.toggle('icon')
  volumeCoffee.classList.toggle('colorInput')
  sound.playAudioCoffee()
})

cardFire.addEventListener('click', () => {
  if(cardFire.classList.contains('color-fire')){
    offSondsCards(sound)
    return
  }

  offSondsCards(sound)
  cardFire.classList.add('color-fire')
  cardFire.classList.toggle('icon')
  volumeFire.classList.toggle('colorInput')
  sound.playAudioFire()
})

return {
  offSondsCards
}

}


