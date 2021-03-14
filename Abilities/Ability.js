class Ability {
  /**
   * @param {Object} ability
   * @param {number} ability.damage
   */
  constructor({ damage }) {
    this._damage = damage
  }

  get damage() {
    return this._damage
  }
}

export default Ability
