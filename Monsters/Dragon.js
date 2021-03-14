import Monster from './Monster.js'

import Strike from '../Abilities/Strike.js'
import BlowFire from '../Abilities/BlowFire.js'

class Dragon extends Monster {
  constructor() {
    super({
      name: 'Dragon',
      health: 150,
      abilities: [new Strike(), new BlowFire()]
    })
  }
}

export default Dragon 
