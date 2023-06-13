import { volumeTree, volumeRain, volumeCoffee, volumeFire} from './variables.js'

export default function volumes({sound}) {

volumeTree.addEventListener('input', () => {
  let volume = volumeTree.value / 100
  sound.audioTree.volume = volume

})

volumeRain.addEventListener('input', () => {
  let volume = volumeRain.value / 100
  sound.audioRain.volume = volume
})

volumeCoffee.addEventListener('input', () => {
  let volume = volumeCoffee.value / 100
  sound.audioCoffee.volume = volume 
})

volumeFire.addEventListener('input', () => {
  let volume = volumeFire.value / 100
  sound.audioFire.volume = volume
})

window.addEventListener('DOMContentLoaded', () => {
  sound.audioTree.volume = 0.5;
  sound.audioRain.volume = 0.5;
  sound.audioCoffee.volume = 0.5;
  sound.audioFire.volume = 0.5;
});


}