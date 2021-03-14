import Hero from './Hero.js'

import Spell from '../Weapons/Spell.js'

class Warrior extends Hero {
  constructor() {
    super({
      name: 'Warrior',
      health: 100,
      unusableWeapons: [Spell]
    })
  }
}

export default Warrior