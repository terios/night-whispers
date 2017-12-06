
const rainIcon = require('../assets/images/rain.png')
const waveIcon = require('../assets/images/wave.png')
const whaleIcon = require('../assets/images/whale.png')
const riverIcon = require('../assets/images/river.png')

const sounds = [
  {
    id: 0,
    title: 'Rain',
    category: 'rain',
    fileName: 'rain.mp3',
    icon: rainIcon,
  },
  {
    id: 1,
    title: 'Sea',
    category: 'sea',
    fileName: 'sea.mp3',
    icon: waveIcon,
  },
  {
    id: 2,
    title: 'Whale',
    category: 'whale',
    fileName: 'whale.mp3',
    icon: whaleIcon,
  },
  {
    id: 3,
    title: 'Mountain stream',
    category: 'river',
    fileName: 'river.mp3',
    icon: riverIcon,
  },
]

export default sounds
