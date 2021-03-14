import Weapon from './Weapon.js'

class Spell extends Weapon {
  constructor() {
    super({ 
      name: 'Spell',
      damage: 20
    })
  }
}

export default Spell
