const express = require('express')
const createUser = require('./createUser')
const router = express.Router()

router.post('/', async (req, res) => { 
    const { name, gender, major } = req.body
    try { 
        const { userId } = await createUser(name, gender, major)
        res.json({
            userId
        })
    } catch (err) { 
        res.status(400).json({
            message: err.message
        })
    }
})

module.exports = router