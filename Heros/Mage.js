import Hero from './Hero.js'

import Sword from '../Weapons/Sword.js'
import Spear from '../Weapons/Spear.js'

class Mage extends Hero {
  constructor() {
    super({
      name: 'Mage',
      health: 150,
      unusableWeapons: [Sword, Spear]
    })
  }
}

export default Mage
