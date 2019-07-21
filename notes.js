const fs = require('fs')
const chalk = require('chalk')
const addNote = (title,body)=>{
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=>note.title === title)
    const duplicateNote = notes.find((note)=>note.title === title)
    if(!duplicateNote)
    {
    notes.push({
        title:title,
        body:body
    })
    console.log(chalk.green.inverse('New Note Added!'))
    saveNotes(notes)
}else{
    console.log(chalk.red.inverse('TITLE ALREADY TAKEN !'))
}
}
const loadNotes = ()=>{
    try
    {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
    
}
const saveNotes = (notes)=>
{
    const JSONdata = JSON.stringify(notes)
    fs.writeFileSync('notes.json',JSONdata)
}
const removeNote = (title)=>
{
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })
    if(notesToKeep.length===notes.length)
    {
        console.log(chalk.red('No such note found !'))
    }
    else
    {
        console.log(chalk.green('Note '+title+' removed !'))
    }
    saveNotes(notesToKeep)
}
const listNotes = ()=>
{
    const notes = loadNotes()
    notes.forEach((note)=>{
        console.log(chalk.green.inverse('Title:'+note.title))
    })
}
const readNotes = (title)=>{
    const notes = loadNotes()
    const reqNote = notes.find((note)=>note.title===title)
    if(reqNote){
        console.log(chalk.green('Title:'+reqNote.title))
        console.log(chalk.green.inverse('To Do:'+reqNote.body))
    }else{
        console.log(chalk.red.inverse('No such note found :('))
    }

}
module.exports={
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNotes:readNotes
}