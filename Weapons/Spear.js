import Weapon from './Weapon.js'

class Spear extends Weapon {
  constructor() {
    super({
      name: 'Spear',
      damage: 15
    })
  }
}

export default Spear
