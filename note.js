console.log('Hello,I am from note.js file');
const fs = require('fs');

//module is object and module.exports.method or .variable
/*
module.exports.add = (name,age) => {

	var result;
	result = 'Your name is '+name+' and you are '+age+' year old!!';
	return result;

};
*/

var fetchNote = () => {

	try{
	
		var notesString = fs.readFileSync('notes.json');
		return JSON.parse(notesString);


	}catch(e){

		return [];

	}
};
var saveNotes = (notes) => {

} ;
//if you want to convert string to json object do it like this '{"property":"value"}'
//JSON.parse(stringname); it converts string to json object


var addNote = (title,body) => {

	var notes = fetchNote();
	var note = {
		title,
		body
	};
	
	
	var dublicateNotes = notes.filter((note) => note.title === title);//note is value

 	if(dublicateNotes.length === 0){

 		notes.push(note);
		fs.writeFileSync('notes.json',JSON.stringify(notes));
	//	return dublicateNotes.length;
		return note;
 	}
 	
 	
};

var getAll = ()=> {

	var allfilestring = fs.readFileSync('notes.json');
	console.log(JSON.parse(allfilestring));




};

var readNote = (title) => {

	//console.log('Reading '+ title);
	var alldata = fetchNote();
	//var allfilestring = fs.readFileSync('notes.json');
	//var check = false;
	
	var result = alldata.filter((note) => note.title === title);

	if(result.length > 0){

		console.log("Note Found");
		/*
		result.forEach(function (element){

			console.log("Title :", element.title);
			console.log("Body :",element.body);

		});
		*/
		console.log(result[0].title);
		console.log(result[0].body);
	}
	else{

		console.log("Note not found");
	}

	/*
	alldata.forEach(function(element) {

		if(title === element.title){
		console.log(element.title);
		console.log(element.body);
		check = true;
		return;		
		}

	});

	if(check === false){

		console.log("Note not found");
	}
	*/

};

var removeNote = (title) => {

	//console.log(title + ' Removed');
	var alldata = fetchNote();
	//console.log(alldata);
	var allnewdata = alldata.filter((note) => note.title !== title);
	//console.log(allnewdata);
	if(alldata.length === allnewdata.length){

		console.log("Please enter correct note name to remove");
	}
	else{

		fs.writeFileSync('notes.json',JSON.stringify(allnewdata));
		console.log("Note successfully deleted");	
	}
	
}
module.exports = {addNote,getAll,readNote,removeNote};
