var makeLibrary = function(){
	var library = {};
	return {
		addShelf: function(name){
			if (library[name])
				console.log("Shelf "+ name +" already exists, use different name");
			else
				library[name] = {books:{}};
		},
		removeShelf: function(name){
			if (library[name])
				delete library[name];
			else
				console.log("Shelf "+name+" doesn't exist");
		},
		addBook: function(book, shelf){
			if (library[shelf])
				library[shelf].books[book] = book;
			else
				console.log("Shelf "+shelf+" doesn't exist");
		},
		removeBook: function(book, shelf){
			if (library[shelf]){
				if (library[shelf].books[book])
					delete library[shelf].books[book]
				else
					console.log("Book \'"+book+"\' doesn't exist in shelf "+shelf);
			} else{
				console.log("Shelf "+shelf+" doesn't exist")
			}
		},
		showLibrary: function(){
			return library
		}
	}
}

module.exports = makeLibrary;


