var makeLibrary = require('./make-library.js');
var seattlePublicLibrary = makeLibrary();


seattlePublicLibrary.addShelf("A");
seattlePublicLibrary.addShelf("A");
seattlePublicLibrary.addBook("Javascript the OK parts", "A");
seattlePublicLibrary.addBook("Javascript the OK parts", "B");
console.log(seattlePublicLibrary.showLibrary());
seattlePublicLibrary.removeBook("Javascript", "A");
seattlePublicLibrary.removeBook("Javascript the OK parts", "A");
console.log(seattlePublicLibrary.showLibrary());
seattlePublicLibrary.removeBook("Javascript", "B");
seattlePublicLibrary.removeShelf("A");
seattlePublicLibrary.removeShelf("B");
console.log(seattlePublicLibrary.showLibrary());