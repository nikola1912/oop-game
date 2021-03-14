import Monster from './Monster.js'

import Strike from '../Abilities/Strike.js'
import Bite from '../Abilities/Bite.js'

class Spider extends Monster {
  constructor() {
    super({
      name: 'Spider',
      health: 100,
      abilities: [new Strike(), new Bite()]
    })
  }
}

export default Spider 
