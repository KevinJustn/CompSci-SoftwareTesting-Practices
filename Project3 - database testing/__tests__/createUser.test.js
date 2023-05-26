const createUser = require('../controller/createUser')
const User = require('../model/User')
const db = require('./db')

beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async () => await db.closeDatabase()) 

describe('Users created when', () => { 
    it('First user filled properly', async () => {

        const { userId } = await createUser("John", "Male", "CS")

        // Find the user in the DB
        const user = await User.findById(userId)

        // Check the details of the user 
        expect(user.name).toEqual("John")
        expect(user.major).toEqual("CS")
        expect(user.gender).toEqual("Male")

    })

    it('User filled without major', async () => {

        const { userId } = await createUser("Peter", "Male")
        const user = await User.findById(userId)
        expect(user.major).toEqual("CS")
    })
})

describe('Errors thrown when', () => { 
    it('Name repeated', async () => { 
        await createUser("Bella", "Female","CS")
        await expect(createUser("Bella","Female","Math")).rejects.toThrow()
    })

    it('Invalid major', async () => { 
        await expect(createUser("Dan", "Male", "Unknown")).rejects.toThrow()
    })

    it('No Name', async () => { 
        await expect(createUser("", "Male", "Math")).rejects.toThrow()
    })

    it('No Gender', async () => { 
        await expect(createUser("Kayla", "", "CS")).rejects.toThrow()
    })
})
