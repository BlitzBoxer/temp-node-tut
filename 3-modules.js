// CommonJS, every file (in node) is module (by default)
//Modules - Encapsulated Code (only share minimum)
const names = require('./4-first-module');
const satHi = require('./5-second modules');
const data = require('./6-alt-modules')



require('./7-mind-grenade')
satHi('susan')
satHi(names.john)
satHi(names.peter)