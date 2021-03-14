import Mage from './Heros/Mage.js'
import Warrior from './Heros/Warrior.js'

import Sword from './Weapons/Sword.js'
import Spear from './Weapons/Spear.js'
import Spell from './Weapons/Spell.js'

import Dragon from './Monsters/Dragon.js'
import Spider from './Monsters/Spider.js'

import getNumberInRange from './utils/getNumberInRange.js'
import getRandomArrayIndex from './utils/getRandomArrayIndex.js'

const mage = new Mage()
const warrior = new Warrior()

const dragon = new Dragon()
const spider = new Spider()

const sword = new Sword()
const spear = new Spear()
const spell = new Spell()

mage.pickUpWeapon(spell)
warrior.pickUpWeapon(sword)
warrior.pickUpWeapon(spear)

const heroes = [mage, warrior]
const monsters = [dragon, spider]

const hero = heroes[getRandomArrayIndex(heroes.length)]
const monster = monsters[getRandomArrayIndex(monsters.length)]

console.log('Fighting hero: ', hero.name)
console.log('Fighting monster: ', monster.name)

while (true) {
  const stateNumber = getNumberInRange(0, 100)

  if (stateNumber <= 50) {
    hero.attackMonster(monster)

    console.log(`${hero.name} attacks ${monster.name} using ${hero.activeWeapon.name}`)

    if (monster.health <= 0) {
      console.log('Hero has killed the beast, rejoice!')
      break
    }
  }

  if (stateNumber > 50) {
    monster.attackHero(hero)

    console.log(`${monster.name} attacks ${hero.name}`)

    if (hero.health <= 0) {
      console.log('The beast has defeated our hero, bummer...')
      break
    }
  }

  console.log('Hero HP: ', hero.health)
  console.log('Monster HP: ', monster.health)
  console.log('\n')
}
