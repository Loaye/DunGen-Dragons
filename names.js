function Player(){
  this.name = '';
  this.race = '';
}

var names = [
  [ // Dragonborn [0]
  // First names [0]
    ['Andonar', 'Aranax', 'Armek', 'Axaran', 'Dohazar', 'Eratax', 'Grax', 'Iskan', 'Ix', 'Loraqen', 'Narith', 'Qor', 'Qotho', 'Nesdaar', 'Razaan', 'Sarax', 'Seev', 'Sevesh', 'Sirazan', 'Solroth',
      'Xax', 'Xyrstan', 'Xyryx', 'Zarkhil', 'Zeven', 'Zor', 'Zeronath'],
  // Surnames [1]
    ['Aksu', 'Baykal', 'Celik', 'Demir', 'Erbil', 'Gomec', 'Gul', 'Kaplan', 'Kaya', 'Kirca', 'Mansur', 'Muhtar', 'Oyal', 'Ozdemir', 'Pekkan', 'Polat', 'Sahin', 'Senturk', 'Yilmaz']
  ],
  [ // Dwarf [1]
  // First names [0]
    ['Algis', 'Alma', 'Balder', 'Beor', 'Breora', 'Broden', 'Davak', 'Dunik', 'Dur', 'Dwalo', 'Elmar', 'Furos', 'Golben', 'Halden', 'Harrow', 'Hilder', 'Hothor', 'Ingleth', 'Kravar', 'Ludo',
      'Marda', 'Norik', 'Olaver', 'Orik', 'Rorin', 'Stilda', 'Taril', 'Therstine', 'Thoster', 'Vargo', 'Walga', 'Wellam', 'Wulf', 'Yanice'],
  // Surnames [1]
    ['Alebelly', 'Battlebeard', 'Beerbreath', 'Cleftbelly', 'Deepdweller', 'Destinaxe', 'Diamondtooth', 'Dirteater', 'Dirtfoot', 'Dugdeep', 'Firebeard', 'Forgemaster', 'Gemseeker', 'Giantsbane', 'Goldforge', 'Goldglory', 'Greybeard', 'Hammerfall', 'Hammerfist', 'Mineshadow', 'Mountainfoot',
      'Mudbeard', 'Mudmouth', 'Oreseer', 'Redbeard', 'Rubymace', 'Sharpsteel', 'Snowbeard', 'Stoneheart', 'Stonekin', 'Stonewalker', 'Stoutshield', 'Warheart', 'Wrymsbane']
  ],
  [ // Elf [2]
  // First names [0]
    ['Adrieth', 'Aerion', 'Aiona', 'Alonon', 'Aphyra', 'Arasys', 'Atalya', 'Avala', 'Brekahn', 'Cazerios', 'Daewin', 'Fenric', 'Gaerlan', 'Hadir', 'Ilmaris', 'Lyndor', 'Miraren', 'Nerisaia', 'Quilana', 'Quokas',
      'Remora', 'Savian','Seylas', 'Sylwen', 'Tarawyn', 'Valthana', 'Vynora', 'Xyrmas', 'Veryas', 'Yesrieth', 'Yewen'],
  // Surnames [1]
    ['Arcanlore', 'Arcanscape', 'Autumnloft', 'Brightsoul', 'Darkbrow', 'Dawnslight', 'Eldertree', 'Evenwind', 'Fallentree', 'Flamedancer', 'Greenleaves', 'Hawkfriend', 'Lightkeeper', 'Loreweaver', 'Moonshadow', 'Moonheart', 'Runekeeper', 'Shadowstepper', 'Spellsayer', 'Starseer',
      'Starsoul', 'Summergale', 'Summersong', 'Sunshadow', 'Sunstrider', 'Waterdancer', 'Whisperwind', 'Woodsoul']
  ],
  [ // Half-Orc [3]
  // First names [0]
    ['Aruk', 'Brogg', 'Cledd', 'Dagmar', 'Dagron', 'Drak', 'Fangor', 'Garash', 'Gezza', 'Grathas', 'Grell', 'Grok', 'Hrosh', 'Kajdak', 'Koldash', 'Krovarr', 'Lurg', 'Magdar', 'Majra', 'Mojek',
      'Rashgar', 'Ravash', 'Shrag', 'Stoga', 'Stromrel', 'Takor', 'Thakda', 'Thraish', 'Thuma', 'Togrr', 'Udonak', 'Urdogg', 'Volg'],
  // Surnames [1]
    ['Beastbane', 'Blackclaw', 'Bloodfist', 'Bloodmare', 'Bloodtusk', 'Bonebreaker', 'Brokenbone', 'Craterface', 'Crushmaw', 'Darkblood', 'Deadeye', 'Deathbringer', 'Deathscream', 'Dragonmaw', 'Fleshrend', 'Frostblood', 'Grimdark', 'Grimrot', 'Hellheart', 'Quickdeath',
      'Rotbreath', 'Rotflesh', 'Scarskin', 'Sharpclaw', 'Sharptooth', 'Shatterhand', 'Shiverflesh', 'Steelskin', 'Stonefist', 'Tornskull', 'Venomtooth', 'Wargbite', 'Wolfsbane']
  ],
  [ // Halfling [4]
  // First names [0]
    ['Andrey', 'Bolo', 'Bree', 'Cailynn', 'Darry', 'Davin', 'Derrin', 'Dayra', 'Edda', 'Emela', 'Farwick', 'Gordo', 'Grinley', 'Hollis', 'Holly', 'Jemma', 'Jollo', 'Joren', 'Kad', 'Katrin',
      'Laina','Lindy', 'Lira', 'Lodor', 'Lumo', 'Margo', 'Mathel', 'Mirabella', 'Norn', 'Orlo', 'Perrin', 'Pippa', 'Pruella', 'Rando', 'Rosna', 'Rosree', 'Sammel', 'Tilly', 'Tulip', 'Walda',
      'Wellen', 'Wimsy', 'Yara'],
  // Surnames [1]
    ['Angler', 'Burrows', 'Fieldhand', 'Fleetfoot', 'Gardner', 'Goldweaver', 'Hollowpot', 'Lightshield', 'Littlefoot', 'Oleander', 'Overjoy', 'Proudlaugh', 'Puddleskipper', 'Riverwalker', 'Saddler', 'Shortcloak', 'Shortstride', 'Skiprock', 'Summersun',
      'Surefoot', 'Swiftstream', 'Tallcup', 'Tallheart', 'Tumblebelly', 'Underfoot', 'Widesmile', 'Weepingwillow', 'Willow']
  ],
  [ // Human [5]
  // First names [0]
    ['Airies', 'Ander', 'Araatris', 'Belina', 'Belthas', 'Beneth', 'Berec', 'Cassad', 'Darvin', 'Derwin', 'Donnel', 'Dyanna', 'Edrick', 'Jeren', 'Kadren', 'Khalar', 'Lano', 'Lorik', 'Maeris', 'Marden',
      'Merdir', 'Raldun', 'Rhakhar', 'Ricard', 'Ricnan', 'Robard', 'Rollam', 'Sileva', 'Treya', 'Tristam', 'Tyran', 'Uthar', 'Valin', 'Verin', 'Waldyn', 'Werrin', 'Wyllam'],
  // Surnames [1]
    ['Armorsmith', 'Arroway', 'Bluebrand', 'Bower', 'Carver', 'Cloudreaver', 'Droverson', 'Falconer', 'Farmer', 'Fletcher', 'Hawkeye', 'Houndfriend', 'Milner', 'Kingsbane', 'Lightheart', 'Oathkeeper', 'Proudsteel', 'Shieldbearer', 'Shipsail', 'Shorewall',
      'Silvercrest', 'Stablehand', 'Swiftstride', 'Swiftstring', 'Swordhand', 'Swordheart', 'Swordsmith', 'Tanner', 'Thunderblade', 'Truesinger', 'Waverider']
  ]
];

function randNum(max){
  return Math.floor(Math.random() * (max));
}

Player.prototype.getName = function(){
  var firstName = '';
  var lastName = '';

  switch(this.race){
  case 'dragonborn':
    firstName = names[0][0][randNum(names[0][0].length)];
    lastName = names[0][1][randNum(names[0][1].length)];
    break;
  case 'dwarf':
    firstName = names[1][0][randNum(names[1][0].length)];
    lastName = names[1][1][randNum(names[1][1].length)];
    break;
  case 'elf':
    firstName = names[2][0][randNum(names[2][0].length)];
    lastName = names[2][1][randNum(names[2][1].length)];
    break;
  case 'half-orc':
    firstName = names[3][0][randNum(names[3][0].length)];
    lastName = names[3][1][randNum(names[3][1].length)];
    break;
  case 'halfling':
    firstName = names[4][0][randNum(names[4][0].length)];
    lastName = names[4][1][randNum(names[4][1].length)];
    break;
  case 'human':
    firstName = names[5][0][randNum(names[5][0].length)];
    lastName = names[5][1][randNum(names[5][1].length)];
    break;
  }
  this.name = firstName + ' ' + lastName;
  console.log('You are ' + this.name + ' the ' + this.race + '.');
};
