import Ability from '../Abilities/Ability.js'

import Hero from '../Heros/Hero.js'

import getRandomArrayIndex from '../utils/getRandomArrayIndex.js'

class Monster {
  /**
   * @param {Object} monster
   * @param {string} monster.name
   * @param {number} monster.health
   * @param {Ability[]} monster.abilities
   */
  constructor({ name, health, abilities }) {
    this.name = name
    this._health = health
    this._abilites = abilities
  }

  get health() {
    return this._health
  }

  /**
   * @param {Hero} hero 
   */
  attackHero(hero) {
    const attackDamage = this._abilites[getRandomArrayIndex(this._abilites.length)].damage

    hero.takeDamage(attackDamage)
  }

  /**
   * @param {number} damage 
   */
  takeDamage(damage) {
    this._health = this._health - damage
  }
}

export default Monster
