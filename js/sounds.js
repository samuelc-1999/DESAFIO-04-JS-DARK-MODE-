export default function () {

  const audioTree = new Audio('audios/Floresta.wav')
  const audioRain = new Audio('audios/Chuva.wav')
  const audioCoffee = new Audio('audios/Cafeteria.wav')
  const audioFire = new Audio('audios/Lareira.wav') 
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  function timeEnd() {
    kitchenTimer.play()
  }
  
  function playAudioTree() {
    audioTree.play()
  }

  function playAudioRain() {
    audioRain.play()
  }

  function playAudioCoffee() {
    audioCoffee.play()
  }

  function playAudioFire() {
    audioFire.play()
  }

  function pauseAudioTree() {
    audioTree.pause()
  }

  function pauseAudioRain() {
    audioRain.pause()
  }

  function pauseAudioCoffee() {
    audioCoffee.pause()
  }
 
  function pauseAudioFire() {
    audioFire.pause()
  }

  return ({
    timeEnd,
    playAudioTree,
    playAudioRain,
    playAudioCoffee,
    playAudioFire,
    playAudioCoffee,
    pauseAudioTree,
    pauseAudioRain,
    pauseAudioCoffee,
    pauseAudioFire,
    audioTree,
    audioRain,
    audioCoffee,
    audioFire
  })
}

