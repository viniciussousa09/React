const mongoose = require("mongoose");

async function main() {

    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect("mongodb+srv://viniciusoliveirasousa09_db_user:nWhnY79Y8dgzEXrc@cluster0.r0tabvh.mongodb.net/?appName=Cluster0");

        console.log("Conectado ao banco!")        
    } catch (error) {
        console.log(`Ero: ${error}`);
    }
}

module.exports = main;