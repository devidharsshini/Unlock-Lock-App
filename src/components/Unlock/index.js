import {useState} from 'react'
import {Noteheading} from './styledComponents'

const Unlock = () => {
  const [lock, unlock] = useState(true)

  const img = lock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png '
  const txt = lock ? 'Your Device is Locked' : 'Your Device is Unlocked'
  const btntxt = lock ? 'Unlock' : 'lock'
  const alttxt = lock ? 'Lock' : 'Unlock'

  const onClicking = () => {
    unlock(lock => !lock)
  }

  return (
    <div>
      <img src={img} alt={alttxt} />
      <Noteheading>{txt}</Noteheading>
      <button tye="button" onClick={onClicking}>
        {btntxt}
      </button>
    </div>
  )
}
export default Unlock
