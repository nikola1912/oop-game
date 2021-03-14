import Weapon from '../Weapons/Weapon.js'

import Monster from '../Monsters/Monster.js'

import { UnusableWeaponException, NoWeaponException, InventoryFullException } from '../exceptions.js'

class Hero {
  /**
   * @param {Object} hero
   * @param {string} hero.name
   * @param {number} hero.health
   * @param {Weapon[]} hero.unusableWeapons
   */
  constructor({ name, health, unusableWeapons }) {
    this.name = name
    this._health = health
    this._unusableWeapons = unusableWeapons

    this._inventory = []
    this._activeWeapon = null
    this._activeWeaponIndex = null
  }

  get activeWeapon() {
    return this._activeWeapon
  }

  get health() {
    return this._health
  }

  /**
   * 
   * @param {Weapon} weapon 
   */
   _addToInventory(weapon) {
    if (this._inventory.length >= 2) {
      throw InventoryFullException
    }
    
    this._inventory = [...this._inventory, weapon]
  }

  /**
   * 
   * @param {Weapon} weapon 
   */
   pickUpWeapon(weapon) {
    const isWeaponUnusable = this._unusableWeapons.some(weaponClass => weapon instanceof weaponClass)
    
    if (isWeaponUnusable) {
      throw UnusableWeaponException
    }

    this._addToInventory(weapon)

    if (this._activeWeapon === null) {
      this._activeWeapon = weapon
      this._activeWeaponIndex = 0
    }
  }

  switchWeapon() {
    if (this._inventory.length === 0) {
      throw NoWeaponException
    }

    if (this._inventory.length === 1) {
      return
    }

    const newActiveWeaponIndex = this._activeWeaponIndex === 0 ? 1 : 0

    this._activeWeapon = this._inventory[newActiveWeaponIndex]
    this._activeWeaponIndex = newActiveWeaponIndex
  }

  /**
   * @param {Monster} monster 
   */
  attackMonster(monster) {
    const attackDamage = this._activeWeapon.damage

    monster.takeDamage(attackDamage)
  }

  /**
   * @param {number} damage 
   */
  takeDamage(damage) {
    this._health = this._health - damage
  }
}

export default Hero
