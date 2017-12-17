import Sound from 'react-native-sound';

import initialState from '../selectors/playlist';
import { PLAY_SOUND } from '../constants';

const myPromise = fileName => new Promise((resolve, reject) => {
  const whoosh = new Sound(fileName, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      reject(error)
    }
    resolve(whoosh)
  });
})

const calback = (sound, state) => {
  console.log({ ...state, soundEffects: [...state.soundEffects, sound] })
  return { ...state, soundEffects: [...state.soundEffects, sound] }
}
export default function playlistReducer(state = initialState, action) {
  switch (action.type) {
    case PLAY_SOUND:
      return myPromise(action.payload.file).then(sound => calback(sound, state), error => state)
    default:
      return state;
  }
}
