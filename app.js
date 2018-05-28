//console.log('First Node File');

const fs = require('fs');
const _= require('lodash');

const notes = require('./note.js');

const yargs = require('yargs');
const titleOptions = {

	describe: "Title of note",
	demand:true
}
var argv = yargs
		.command('add','Add a new add',{

			title :titleOptions,
			body :{

					describe: 'Body of note',
					demand:true
			}

		})								/*command(name of the command,what it does,{
										object (what arguments this command required)
										})
										*/
		.command('list','List all notes')
		.command('read','Read a note',{

				title: titleOptions
		})
		.command('remove','Remove a note',{

			title: titleOptions
		})								
		.help()
		.argv;
							
var command = argv._[0];
console.log('Command:',command);



if(command === 'add'){
	
	var note = notes.addNote(argv.title,argv.body);
	
	if(note){
		console.log("Note created successfuly");
		debugger;
		console.log("Title : " + note.title);
}
	else{
		console.log("Note name taken");
	}
}
else if(command === 'list'){
	notes.getAll();
}
else if(command === 'read'){
	notes.readNote(argv.title);
}
else if(command === 'remove'){
	notes.removeNote(argv.title);
}

else {
	console.log('Kuch command dal de bhai');
}






//fs.appendFileSync('greeting.text','Hello Jee!!');
/*
fs.appendFile('greeting.text','Hello' + user.username +'!!',function (err){

	if(err){

		console.log('error aa gaya');
	}
	else
	{
		console.log('Success ho gaye');
	}

});

//console.log(_.isString(true));
//console.log(_.isString('true'));
//var number = [2,3,4];
//var uniqnumber = _.uniq(number);
//console.log(number);
//console.log(uniqnumber);

//console.log(process.argv);
//const notes = require('./note.js');
//var result = notes.add('Priyansh',19);
//console.log(result);

*/