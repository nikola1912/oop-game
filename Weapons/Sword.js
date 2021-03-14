import Weapon from './Weapon.js'

class Sword extends Weapon {
  constructor() {
    super({ 
      name: 'Sword',
      damage: 10
    })
  }
}

export default Sword
