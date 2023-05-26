
const User = require("../model/User")

module.exports = async function createUser(name, gender, field) { 
    try { 
        // Check if Restaurant Name is repeated 
        const existingUser = await User.findOne({name:name})
        if (existingUser) throw new Error(`A User with the name ${name} already exists.`)

        // Create Object
        const newUser = new User ({
            name,
            gender,
            major: field
        })
        await newUser.save()

        return { 
            userId: newUser._id
        }
    } catch (err) { 
        throw err
    }
}