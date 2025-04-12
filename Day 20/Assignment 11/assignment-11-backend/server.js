require("dotenv").config();
const express = require("express");
const {Pool} = require("pg");
const cors = require("cors");

const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());
app.use(cors());

//POSTGRESQL Connections
const personalPool = new Pool({
    host: process.env.DB_PERSONAL_HOST,
    user: process.env.DB_PERSONAL_USER,
    password: process.env.DB_PERSONAL_PASSWORD,
    database: process.env.DB_PERSONAL_NAME,
    port: process.env.DB_PERSONAL_PORT,
});

const hobbiesPool = new Pool({
    host: process.env.DB_HOBBIES_HOST,
    user: process.env.DB_HOBBIES_USER,
    password: process.env.DB_HOBBIES_PASSWORD,
    database: process.env.DB_HOBBIES_NAME,
    port: process.env.DB_HOBBIES_PORT,
});

//Routes
app.get("/personal", async (req, res) => {
    try{
        const result = await personalPool.query("SELECT * FROM personal");
        res.json(result.rows);
    }catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
}); 

app.get("/hobbies", async (req, res) => {
    try{
        const result = await hobbiesPool.query("SELECT * FROM hobby");
        res.json(result.rows);
    }catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});

//Starting server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));