const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server');

var mongod = new MongoMemoryServer();

// Connecting to the DB 
module.exports.connect = async () => { 
    mongod = await MongoMemoryServer.create();
    const uri = await mongod.getUri(); 
    const mongooseOpts = { 
        useNewUrlParser : true, 
        useUnifiedTopology : true, 
        family: 4
    };
    mongoose.connect(uri, mongooseOpts);
}

// Disconnect and Close Connection
module.exports.closeDatabase = async () => { 
    await mongoose.connection.dropDatabase(); 
    await mongoose.connection.close();
    await mongod.stop();
} 

// Clear the DB and Remove all Data 
module.exports.clearDatabase = async () => { 
    const collections = mongoose.connection.collection;
    for (const key in collections) { 
        const collection = collections(key);
        await collection.deleteMany();
    }
}

/* Add the following to the top of test files 

const db = require('./db')
beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async () => await db.closeDatabase()) 

*/