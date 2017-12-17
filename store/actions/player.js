import { PLAY_SOUND } from '../constants'

export function playSound(id, file) {
  return {
    type: PLAY_SOUND,
    payload: {
      id,
      file,
    },
  }
}
