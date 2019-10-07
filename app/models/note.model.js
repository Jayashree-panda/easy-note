const mongo = require('mongoose')
const NoteSchema = new mongo.Schema({
    title: String,
    content: String
},{
    timestamps: true
})

module.exports = mongo.model('Note',NoteSchema)