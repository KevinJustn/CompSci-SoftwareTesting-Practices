const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema (
    {
        name: {
            type: String,
            minLength: 1
        },
        gender: { 
            type: String,
            minLength: 1
        },
        major: {
            type: String,
            enum: ["CS", "Math"],
            default: "CS"
        }
    }
)

module.exports = mongoose.model('User', userSchema)
