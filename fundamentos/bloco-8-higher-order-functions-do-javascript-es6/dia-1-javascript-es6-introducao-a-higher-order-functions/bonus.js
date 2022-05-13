const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const defDragon = () => {
  let damage = 0;
  while (damage < 15) {
    damage = Math.floor(Math.random() * battleMembers.dragon.strength);
  }
  return damage;
}

const defWarrior = () => {
  let damage = 0;
  while (damage < battleMembers.warrior.strength) {
    damage = Math.floor(Math.random() * battleMembers.warrior.strength * battleMembers.warrior.weaponDmg);
  }
  return damage;
}

const defMage = () => {
  let damage = 0;
  if (battleMembers.mage.mana > 15) {
    while (damage < battleMembers.mage.intelligence) {
      damage = Math.floor(Math.random() * battleMembers.mage.intelligence * 2);
    }
    const mageInfo = {
      damage: damage,
      mana: battleMembers.mage.mana - 15
    };
  } else {
    const magInfo = {
      damage: damage,
      mana: battleMembers.mage.mana
    }
  }
  return magInfo;
}

const gameActions = {
  warriorAttack: () => {
    const warriorDamage = defWarrior;
    battleMembers.dragon.healthPoints -= warriorDamage;
    battleMembers.warrior.damage = warriorDamage;
  },
  mageAttack: () => {
    const MageDamage = defMage;
    battleMembers.dragon.healthPoints -= MageDamage;
    battleMembers.mage.damage = MageDamage;
  },
  dragonAttack: () => {
    const dragonDamage = defDragon;
    battleMembers.mage.healthPoints -= dragonDamage;
    battleMembers.warrior.healthPoints -= dragonDamage;
    battleMembers.dragon.damage = dragonDamage;
  },
  ActualSituation: () => {
    console.log(battleMembers);
  }
}
