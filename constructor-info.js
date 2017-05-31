'use strict';

//languages
var allLanguages = ['Abyssal', 'Aquan', 'Auran', 'Celestial', 'Deep Speach', 'Draconic', 'Druidic', 'Dwarvish', 'Elvish', 'Giant', 'Gnomish', 'Goblin', 'Gnoll', 'Halfling', 'Ignan', 'Infernal', 'Orc', 'Primoridial', 'Sylvan', 'Terran', 'Undercommon'];

//race---------------------------------------
//Dragon Born
var dragonbornNames = [
  ['Andonar', 'Aranax', 'Armek', 'Axaran', 'Dohazar', 'Eratax', 'Grax', 'Iskan', 'Ix', 'Loraqen', 'Narith', 'Qor', 'Qotho', 'Nesdaar', 'Razaan', 'Sarax', 'Seev', 'Sevesh', 'Sirazan', 'Solroth','Xax', 'Xyrstan', 'Xyryx', 'Zarkhil', 'Zeven', 'Zor', 'Zeronath'],
  ['Aksu', 'Baykal', 'Celik', 'Demir', 'Erbil', 'Gomec', 'Gul', 'Kaplan', 'Kaya', 'Kirca', 'Mansur', 'Muhtar', 'Oyal', 'Ozdemir', 'Pekkan', 'Polat', 'Sahin', 'Senturk', 'Yilmaz']
];

var dragonbornDesc = 'Proud, honorable warriors, born from the blood of an ancient dragon god.  Slow to form alliances but steadfast once commonality has been established and your innate goodness will show.  Lest you venture toward evil, in which your strength will make you an increasingly terrible villain.';

var dragonbornTraits = ['Draconic Ancestry Black Acid', 'Draconic Ancestry Blue Lightning', 'Draconic Ancestry Brass Fire', 'Draconic Ancestry Bronze Lightning', 'Draconic Ancestry Copper Acid', 'Draconic Ancestry Gold Fire', 'Draconic Ancestry Green Poison', 'Draconic Ancestry Red Fire', 'Draconic Ancestry Silver Cold', 'Draconic Ancestry White Cold', 'Breath Weapon', 'Damage Resistance'];

//dwarf
var dwarfNames = [
  ['Algis', 'Alma', 'Balder', 'Beor', 'Breora', 'Broden', 'Davak', 'Dunik', 'Dur', 'Dwalo', 'Elmar', 'Furos', 'Golben', 'Halden', 'Harrow', 'Hilder', 'Hothor', 'Ingleth', 'Kravar', 'Ludo', 'Marda', 'Norik', 'Olaver', 'Orik', 'Rorin', 'Stilda', 'Taril', 'Therstine', 'Thoster', 'Vargo', 'Walga', 'Wellam', 'Wulf', 'Yanice'],
  ['Alebelly', 'Battlebeard', 'Beerbreath', 'Cleftbelly', 'Deepdweller', 'Destinaxe', 'Diamondtooth', 'Dirteater', 'Dirtfoot', 'Dugdeep', 'Firebeard', 'Forgemaster', 'Gemseeker', 'Giantsbane', 'Goldforge', 'Goldglory', 'Greybeard', 'Hammerfall', 'Hammerfist', 'Mineshadow', 'Mountainfoot', 'Mountainson', 'Mudbeard', 'Mudmouth', 'Oreseer', 'Redbeard', 'Rubymace', 'Sharpsteel', 'Snowbeard', 'Stoneheart', 'Stonekin', 'Stoneson', 'Stonewalker', 'Stoutshield', 'Warheart', 'Wrymsbane']
];

var dwarfDesc = 'Noble, industrious, and commitment to your ancestry keep you firmly rooted in tradition.  Desire for treasure will help motivate you during your travels.';

var dwarfTraits = ['Darkvision', 'Dwarven Resilience', 'Dwarven Combat Training', 'Dwarven Toughness', 'Tool Profiency', 'Stonecunning'];

//elf
var elfNames = [
  ['Adrieth', 'Aerion', 'Aiona', 'Alonon', 'Aphyra', 'Arasys', 'Atalya', 'Avala', 'Brekahn', 'Cazerios', 'Daewin', 'Fenric', 'Gaerlan', 'Hadir', 'Ilmaris', 'Lyndor', 'Miraren', 'Nerisaia', 'Quilana', 'Quokas',
    'Remora', 'Savian','Seylas', 'Sylwen', 'Tarawyn', 'Valthana', 'Vynora', 'Xyrmas', 'Veryas', 'Yesrieth', 'Yewen'],
  ['Arcanlore', 'Arcanscape', 'Autumnloft', 'Brightsoul', 'Darkbrow', 'Dawnslight', 'Eldertree', 'Evenwind', 'Fallentree', 'Flamedancer', 'Greenleaves', 'Hawkfriend', 'Lightkeeper', 'Loreweaver', 'Moonshadow', 'Moonheart', 'Runekeeper', 'Shadowstepper', 'Spellsayer', 'Starseer', 'Starsoul', 'Summergale', 'Summersong', 'Sunshadow', 'Sunstrider', 'Waterdancer', 'Whisperwind', 'Woodsoul']
];

var elfDesc = 'From the midst of ancient forests and shimmering spires blanketed in magical dew you emerge.  Fanciful and artistic, often appearing aloof but when pursuing a goal, elves can be focused and relentless.';

var elfTraits = ['Darkvision', 'Keen Senses', 'Fey Ancestry', 'Trance'];

//half-orc
var halfOrcNames = [
  ['Aruk', 'Brogg', 'Cledd', 'Dagmar', 'Dagron', 'Drak', 'Fangor', 'Garash', 'Gezza', 'Grathas', 'Grell', 'Grok', 'Hrosh', 'Kajdak', 'Koldash', 'Krovarr', 'Lurg', 'Magdar', 'Majra', 'Mojek',
    'Rashgar', 'Ravash', 'Shrag', 'Stoga', 'Stromrel', 'Takor', 'Thakda', 'Thraish', 'Thuma', 'Togrr', 'Udonak', 'Urdogg', 'Volg'],
  ['Beastbane', 'Blackclaw', 'Bloodfist', 'Bloodmare', 'Bloodtusk', 'Bonebreaker', 'Brokenbone', 'Craterface', 'Crushmaw', 'Darkblood', 'Deadeye', 'Deathbringer', 'Deathscream', 'Dragonmaw', 'Fleshrend', 'Frostblood', 'Grimdark', 'Grimrot', 'Hellheart', 'Quickdeath','Rotbreath', 'Rotflesh', 'Scarskin', 'Sharpclaw', 'Sharptooth', 'Shatterhand', 'Shiverflesh', 'Steelskin', 'Stonefist', 'Tornskull', 'Venomtooth', 'Wargbite', 'Wolfsbane']
];

var halfOrcDesc = 'Being half-orc you naturally drift toward chaos making you fierce in battle.  Their chaotic nature makes them unlikely to cooperate unless unified by a strong leader.';

var halfOrcTraits = ['Darkvision', 'Menacing', 'Relentless Endurance', 'Savage Attacks'];

//halfling
var halflingNames = [
  ['Dildo Baggins', 'Bolo', 'Bree', 'Cailynn', 'Darry', 'Davin', 'Derrin', 'Dayra', 'Edda', 'Emela', 'Farwick', 'Gordo', 'Grinley', 'Hollis', 'Holly', 'Jemma', 'Jollo', 'Joren', 'Kad', 'Katrin', 'Laina','Lindy', 'Lira', 'Lodor', 'Lumo', 'Margo', 'Mathel', 'Mirabella', 'Norn', 'Orlo', 'Perrin', 'Pippa', 'Pruella', 'Rando', 'Rosna', 'Rosree', 'Sammel', 'Tilly', 'Tulip', 'Walda', 'Wellen', 'Wimsy', 'Yara'],
  ['Angler', 'Burrows', 'Fieldhand', 'Fleetfoot', 'Gardner', 'Goldweaver', 'Hollowpot', 'Lightshield', 'Littlefoot', 'Oleander', 'Overjoy', 'Proudlaugh', 'Puddleskipper', 'Riverwalker', 'Saddler', 'Shortcloak', 'Shortstride', 'Skiprock', 'Summersun', 'Surefoot', 'Swiftstream', 'Tallcup', 'Tallheart', 'Tumblebelly', 'Underfoot', 'Widesmile', 'Weepingwillow', 'Willow']
];

var halflingDesc = 'Naturally good-hearted and kind you hate to see others in pain and have no tolerance for oppression.  You are small and nimble (half the size of a human) but a valuable asset to any quest.';

var halflingTraits = ['Lucky', 'Brave', 'Halfling Nimbleness', 'Lightfoot'];

//Human
var humanNames = [
  ['Airies', 'Ander', 'Araatris', 'Belina', 'Belthas', 'Beneth', 'Berec', 'Cassad', 'Darvin', 'Derwin', 'Donnel', 'Dyanna', 'Edrick', 'Jeren', 'Kadren', 'Khalar', 'Lano', 'Lorik', 'Maeris', 'Marden', 'Merdir', 'Raldun', 'Rhakhar', 'Ricard', 'Ricnan', 'Robard', 'Rollam', 'Sileva', 'Treya', 'Tristam', 'Tyran', 'Uthar', 'Valin', 'Verin', 'Waldyn', 'Werrin', 'Wyllam'],
  ['Armorsmith', 'Arroway', 'Bluebrand', 'Bower', 'Carver', 'Cloudreaver', 'Droverson', 'Falconer', 'Farmer', 'Fletcher', 'Hawkeye', 'Houndfriend', 'Milner', 'Kingsbane', 'Lightheart', 'Oathkeeper', 'Proudsteel', 'Shieldbearer', 'Shipsail', 'Shorewall', 'Silvercrest', 'Stablehand', 'Swiftstride', 'Swiftstring', 'Swordhand', 'Swordheart', 'Swordsmith', 'Tanner', 'Thunderblade', 'Truesinger', 'Waverider']
];

var humanDesc = 'In the D&D realm Humans are the youngest of the common races.  They are the most daring, adaptable and ambitious, partly because they have a shorter life-span than the others.';

//Class ----------------------------------------
//Bard
var bardDesc = 'Bards were among the most versatile of adventurers. While not necessarily as tough as a warrior, as skilled as a rogue, or as intelligent as a mage, bards were widely capable in a number of different situations and are widely recognized as a sort of "jack-of-all-trades." Bards are versatile arcane spell casters, capable in combat, art, and magic alike. Bards practice magic as they would art or song, using their artistic talents to induce magical effects that either bolster their allies or hindered their enemies, typically through charms and illusions. In addition to their magical skills, bards are artistically talented and extraordinarily well-learned, possessing knowledge in a wide range of fields. Bards are among the most versatile of adventurers, capable of learning from practically any trade.';

//Cleric
var clericDesc = 'A cleric is a divine servant of one or more gods, serving them with martial might and divine magic fueled by their own strength of faith. As agents of a divine authority, clerics are empowered both by ritual training and their god\'s particular favor. Clerics inspired both reverence and terror, depending on their aims and who they serve.  Clerics, who might be good or evil, lawful or chaotic, dependent on who they worshiped and why. Good clerics heal and protect, helping those in need while evil clerics terrorize and destroy, increasing the power of their deity and themselves. Generally, non-evil clerics were more common, since good or neutral deities tended to attract more worshipers than evil ones did.';

//Mage
var mageDesc = 'What mages (think wizard) lack in combat prowess and armor they make up with a broad range of magical spells and abilities learned through years of practice and training. Through their spell casting ability powerful mages can control the battlefield, using spells that affect wide areas, often hindering enemies, while also learning to use powerful rituals of arcane power.';

//Ranger
var rangerDesc = 'Rangers are warriors who excel at exploring the fringes of civilization and hunting down deadly monsters. Hunters, scouts, trappers, and assassins, rangers can be found wherever civilization bordered the wilderness. To aid them in their outback treks, rangers are trained in a number of combat techniques, survival skills, and even magic.';

//Rogue
var rogueDesc = 'Rogues are versatile masters of stealth, combat, and various skillful tricks. Where other adventurers have the power to defeat their enemies, rogues used their wits and their natural resourcefulness to exploit their foes\' vulnerabilities as well as to lead their allies safely through dangerous environments, disarming traps and opening lock along the way.';

//Warrior
var warriorDesc = 'A skilled warrior defined the front line of any battle, breaking through enemy ranks and holding the line while their allies maneuvered. All warriors are trained to use virtually any armor or weapon the situation required; a warrior could use an axe, a rapier, or a greatsword with roughly equivalent skill. As well as being combat generalists, most warriors also specialized in a particular skillset, such as archery or combat magic.';
