function Player(){
  this.name = '';
  this.race = '';
}

var names = [
  [ // Dragonborn [0]
  // First names [0]
    ['Andonar', 'Armek', 'Axaran', 'Dohazar', 'Eratax', 'Grax', 'Iskan', 'Ix', 'Loraqen', 'Narith', 'Nesdaar', 'Razaan', 'Sarax', 'Sevesh', 'Sirazan', 'Solroth', 'Xyrstan', 'Xyryx', 'Zarkhil', 'Zor', 'Zeronath'],
  // Surnames [1]
    ['Aksu', 'Baykal', 'Celik', 'Demir', 'Erbil', 'Gomec', 'Gul', 'Kaplan', 'Kaya', 'Kirca', 'Mansur', 'Muhtar', 'Oyal', 'Ozdemir', 'Pekkan', 'Polat', 'Sahin', 'Senturk', 'Yilmaz']
  ],
  [ // Dwarf [1]
  // First names [0]
    ['Algis', 'Alma', 'Balder', 'Breora', 'Broden', 'Davak', 'Dunik', 'Dwalo', 'Furos', 'Halden', 'Hilder', 'Ingleth', 'Kravar', 'Ludo', 'Marda', 'Norik', 'Olaver', 'Orik', 'Rorin', 'Stilda', 'Taril', 'Therstine', 'Thoster', 'Walga', 'Wellam', 'Yanice'],
  // Surnames [1]
    ['Alebelly', 'Battlebeard', 'Deepdweller', 'Destinaxe', 'Dugdeep', 'Forgemaster', 'Giantsbane', 'Greybeard', 'Hammerfall', 'Mineshadow', 'Mountainfoot', 'Mudbeard', 'Oreseer', 'Redbeard', 'Rubymace', 'Sharpsteel', 'Stoneheart', 'Stonekin', 'Stoutshield', 'Wrymsbane']
  ],
  [ // Elf [2]
  // First names [0]
    ['Adrieth', 'Aiona', 'Alonon', 'Aphyra', 'Arasys', 'Atalya', 'Brekahn', 'Cazerios', 'Daewin', 'Fenric', 'Gaerlan', 'Hadir', 'Ilmaris', 'Lyndor', 'Miraren', 'Nerisaia', 'Quilana', 'Quokas', 'Remora', 'Savian', 'Seylas', 'Sylwen', 'Tarawyn', 'Valthana', 'Vynora', 'Xyrmas', 'Veryas', 'Yesrieth', 'Yewen'],
  // Surnames [1]
    ['Arcanlore', 'Autumnloft', 'Brightsoul', 'Darkbrow', 'Dawnslight', 'Eldertree', 'Evenwind', 'Fallentree', 'Greenleaves', 'Hawkfriend', 'Loreweaver', 'Moonshadow', 'Moonheart', 'Runekeeper', 'Spellsayer', 'Starsoul', 'Summergale', 'Summersong', 'Sunshadow', 'Waterdancer', 'Whisperwind', 'Woodsoul']
  ],
  [ // Half-Orc [3]
  // First names [0]
    ['Aruk', 'Cledd', 'Dagmar', 'Dagron', 'Fangor', 'Gezza', 'Grathas', 'Grell', 'Grok', 'Hrosh', 'Kajdak', 'Magdar', 'Majra', 'Mojek', 'Ravash', 'Stoga', 'Stromrel', 'Takor', 'Thakda', 'Thraish', 'Thuma', 'Togrr', 'Udonak'],
  // Surnames [1]
    ['Beastbane', 'Blackclaw', 'Bloodfist', 'Bloodmare', 'Bloodtusk', 'Brokenbone', 'Crushmaw', 'Darkblood', 'Deadeye',  'Frostblood', 'Grimrot', 'Quickdeath', 'Rotflesh', 'Sharptooth', 'Steelskin', 'Stonefist', 'Tornskull', 'Venomtooth', 'Wolfsbane']
  ],
  [ // Halfling [4]
  // First names [0]
    ['Andrey', 'Bolo', 'Bree', 'Cailynn', 'Darry', 'Davin', 'Derrin', 'Dayra', 'Edda', 'Emela', 'Farwick', 'Hollis', 'Joren', 'Kad', 'Katrin', 'Laina', 'Lindy', 'Lira', 'Lodor', 'Mathel', 'Mirabella', 'Norn', 'Orlo', 'Perrin', 'Pippa', 'Pruella', 'Rosna', 'Rosree', 'Sammel', 'Tilly'],
  // Surnames [1]
    ['Angler', 'Burrows', 'Fieldhand', 'Fleetfoot', 'Gardner', 'Goldweaver', 'Hollowpot', 'Lightshield', 'Littlefoot', 'Oleander', 'Overjoy', 'Proudlaugh', 'Puddleskipper', 'Riverwalker', 'Saddler', 'Shortcloak', 'Shortstride', 'Skiprock', 'Surefoot', 'Swiftstream', 'Tallcup', 'Tallheart', 'Tumblebelly', 'Widesmile', 'Willow']
  ],
  [ // Human [5]
  // First names [0]
    ['Airies', 'Ander', 'Araatris', 'Cassad', 'Belina', 'Belthas', 'Derwin', 'Donnel', 'Dyanna', 'Edrick', 'Jeren', 'Lano', 'Lorik', 'Kadren', 'Khalar', 'Maeris', 'Marden', 'Merdir', 'Raldun', 'Rhakhar', 'Ricard', 'Ricnan', 'Robard', 'Rollam', 'Sileva', 'Treya', 'Tyran', 'Uthar', 'Verin', 'Waldyn', 'Werrin', 'Wyllam'],
  // Surnames [1]
    ['Armorsmith', 'Arroway', 'Bluebrand', 'Carver', 'Cloudreaver', 'Droverson', 'Falconer', 'Fletcher', 'Hawkeye', 'Houndfriend', 'Milner', 'Kingsbane', 'Proudsteel', 'Swiftstring', 'Swordhand', 'Tanner', 'Thunderblade', 'Truesinger']
  ]
];

function randNum(max){
  return Math.floor(Math.random() * (max - 0 + 1)) + 0;
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
