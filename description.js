const races = {
    drow: "Drow are dark elves, known for their innate magic and stealth.",
    dwarf: "Dwarves are solid and enduring like the mountains they love.",
    goldDwarf: "Gold Dwarves are known for their resilience and strong will.",
    shieldDwarf: "Shield Dwarves are tough and stout, used to hard labor.",
    elf: "Elves are a magical people of otherworldly grace.",
    highElf: "High Elves are proud and aloof, believing themselves superior.",
    woodElf: "Wood Elves are reclusive and mysterious, living in ancient forests.",
    githyanki: "Githyanki are proud, deadly, and fearless in the face of any foe.",
    halfElf: "Half-elves combine the best qualities of their elf and human parents.",
    highHalfElf: "High Half-Elves inherit the best traits from both High Elves and Humans.",
    woodHalfElf: "Wood Half-Elves inherit the traits of Wood Elves and Humans.",
    drowHalfElf: "Drow Half-Elves are a rare blend of Drow and Human traits.",
    halfling: "Halflings are an affable and cheerful people who cherish home comforts.",
    lightfootHalfling: "Lightfoot Halflings are known for their ability to move stealthily.",
    strongheartHalfling: "Strongheart Halflings are stout and resilient.",
    human: "Humans are the most adaptable and ambitious people.",
    tiefling: "Tieflings are known for their cunning and unique charm.",
    asmodeusTiefling: "Asmodeus Tieflings are the most common and are charismatic and intelligent.",
    mephistophelesTiefling: "Mephistopheles Tieflings have an innate ability to cast spells.",
    zarielTiefling: "Zariel Tieflings are fierce warriors, with an affinity for combat."
};

const classes = {
    barbarian: "Barbarians are fierce warriors of primitive background.",
    bard: "Bards are versatile spellcasters who inspire their allies.",
    cleric: "Clerics are intermediaries between the mortal world and the gods.",
    druid: "Druids are priests of the Old Faith, wielding the powers of nature.",
    fighter: "Fighters share an unparalleled mastery with weapons and armor.",
    monk: "Monks are masters of martial arts and unarmed combat.",
    paladin: "Paladins are holy warriors bound to a sacred oath.",
    ranger: "Rangers are warriors of the wilderness, experts in tracking.",
    rogue: "Rogues rely on skill, stealth, and their foes’ vulnerabilities.",
    sorcerer: "Sorcerers possess innate magical abilities.",
    warlock: "Warlocks derive their power from a pact with an otherworldly being.",
    wizard: "Wizards are supreme magic-users defined by the spells they cast."
};

const subclasses = {
    berserker: "Berserkers are barbarians who channel their rage into devastating attacks.",
    wildheart: "Wildheart barbarians have a deep connection to nature and animals.",
    wildMagic: "Wild Magic barbarians can harness chaotic magic through their rage.",
    collegeOfLore: "Lore bards seek to gather knowledge to inspire and guide their allies.",
    collegeOfValour: "Valour bards excel in combat, inspiring their allies to heroism.",
    lifeDomain: "Life Domain clerics focus on healing and vitality.",
    lightDomain: "Light Domain clerics use the power of light to fight darkness.",
    trickeryDomain: "Trickery Domain clerics use deception and illusion to defeat their foes.",
    knowledgeDomain: "Knowledge Domain clerics seek to understand the mysteries of the universe.",
    natureDomain: "Nature Domain clerics have a deep connection to the natural world.",
    tempestDomain: "Tempest Domain clerics can call upon the power of storms.",
    warDomain: "War Domain clerics are warriors of their deities, fighting in their name.",
    circleOfTheLand: "Circle of the Land druids draw power from nature itself.",
    circleOfTheMoon: "Circle of the Moon druids transform into powerful beasts.",
    circleOfTheSpores: "Circle of the Spores druids wield the power of fungi and decay.",
    battleMaster: "Battle Masters are fighters who excel in battlefield tactics.",
    eldritchKnight: "Eldritch Knights combine martial prowess with magical abilities.",
    champion: "Champions are fighters known for their raw strength and combat prowess.",
    wayOfTheOpenHand: "Monks of the Open Hand focus on unarmed combat techniques.",
    wayOfShadow: "Monks of the Way of Shadow are stealthy and use their ki to strike from the shadows.",
    wayOfTheFourElements: "Monks of the Four Elements can manipulate natural forces with their ki.",
    oathOfTheAncients: "Paladins of the Ancients are sworn to protect the light of the world.",
    oathOfDevotion: "Paladins of Devotion are committed to justice, virtue, and order.",
    oathOfVengeance: "Paladins of Vengeance seek to punish wrongdoers by any means necessary.",
    beastMaster: "Beast Master rangers form a bond with a beast companion.",
    gloomStalker: "Gloom Stalker rangers excel in the dark, ambushing their foes.",
    hunter: "Hunters are rangers who specialize in tracking and taking down their prey.",
    arcaneTrickster: "Arcane Tricksters combine rogue skills with magic.",
    assassin: "Assassins are rogues who excel at killing their targets with precision.",
    thief: "Thieves are rogues who specialize in stealth and the art of thievery.",
    wildMagic: "Wild Magic sorcerers can harness chaotic magic.",
    draconicBloodline: "Draconic Bloodline sorcerers draw power from their dragon ancestry.",
    stormSorcery: "Storm Sorcery sorcerers can control the power of the storm.",
    theFiend: "Warlocks of the Fiend pact draw power from devils and demons.",
    theGreatOldOne: "Warlocks of the Great Old One pact derive power from ancient, eldritch beings.",
    theArchfey: "Warlocks of the Archfey pact gain their power from powerful fey creatures.",
    schoolOfAbjuration: "Abjuration wizards specialize in protective and warding spells.",
    schoolOfEvocation: "Evocation wizards excel at spells that deal damage.",
    schoolOfIllusion: "Illusion wizards specialize in creating illusions to deceive others.",
    schoolOfTransmutation: "Transmutation wizards can alter physical reality."
};

const backgrounds = {
    acolyte: "Acolytes are dedicated to serving a specific deity and performing sacred rites.",
    charlatan: "Charlatans are masters of deception, using their guile to swindle and deceive.",
    criminal: "Criminals have a history of breaking the law, using their skills for personal gain.",
    entertainer: "Entertainers bring joy to others through their performances, whether through music, dance, or storytelling.",
    folkHero: "Folk heroes are champions of the common people, known for their acts of bravery.",
    guildArtisan: "Guild artisans are skilled tradespeople, creating works of great craftsmanship.",
    hermit: "Hermits have spent years in seclusion, searching for spiritual enlightenment.",
    noble: "Nobles are born to wealth and privilege, trained in diplomacy and the art of ruling.",
    outlander: "Outlanders are survivors of the wild, having grown up in the untamed wilderness.",
    sage: "Sages are seekers of knowledge, delving into ancient tomes and uncovering forgotten lore.",
    sailor: "Sailors are experienced seafarers, at home on the open ocean.",
    soldier: "Soldiers have seen battle and lived to tell the tale, bringing their martial prowess to the adventuring life.",
    urchin: "Urchins grew up on the streets, surviving through cunning and resourcefulness."
};

export { races, classes, subclasses, backgrounds };
