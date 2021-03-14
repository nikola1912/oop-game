class Weapon {
  /**
   * @param {Object} weapon
   * @param {number} weapon.damage
   */
  constructor({ name, damage }) {
    this.name = name
    this._damage = damage
  }

  get damage() {
    return this._damage
  }
}

export default Weapon
