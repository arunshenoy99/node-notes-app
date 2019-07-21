//Add,Remove,Read,List
const chalk = require('chalk')
const notes=require('./notes.js')
const yargs = require('yargs')
//Customize args Version
yargs.version('1.1.0')
//Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'NOTE TITLE',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Text to be written',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})
//Create remove command
yargs.command({
    command:'remove',
    describe:'REMOVING NOTE',
    builder:{
        title:{
            describe:'Title of note to be removed',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//Create list command
yargs.command({
    command:'list',
    describe:'List all the notes',
    handler(){
        notes.listNotes()
    }
})
//Create read commnad
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:'Title of note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})
yargs.parse()
















// const command = process.argv[2]

// if(command === 'add'){

    // console.log('Adding note....')
// }
// else if(command === 'remove'){

    // console.log('Removing notes....')
// }










// const chalk = require('chalk')
// console.log(chalk.bold.green('Success !'))
// console.log(chalk.red.inverse('Error !'))


// const validator = require('validator')
// if(validator.isEmail('arunshenoy99@g'))
// {
    // console.log("Yes")
// }


// const add=require('./utils.js')

// console.log(add(4,-2))