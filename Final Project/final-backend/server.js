const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/finalDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log('MongoDB Connected'))
.catch((err)=>console.error('MongoDB error', err));

//Defining schemas and models
const projectsSchema = new mongoose.Schema({
    title: String,
    description: String,
    technologies: String,
    link: String,
    image: String,
})
const Projects = mongoose.model('Projects', projectsSchema);

const educationSchema = new mongoose.Schema({
    institution: String,
    degree: String,
    year: String,
    description: String,
})
const Education = mongoose.model('Education', educationSchema);

const skillsSchema = new mongoose.Schema({
    name: String,
    level: String,
    icon: String,
})
const Skills = mongoose.model('Skills', skillsSchema);

const contact_messagesSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    timestamp: String,
})
const Contacts = mongoose.model('Projects', contact_messagesSchema);

//Routes

//Start server!
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});