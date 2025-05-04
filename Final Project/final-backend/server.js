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
})
const Skills = mongoose.model('Skills', skillsSchema);

const contact_messagesSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    timestamp: String,
})
const Contact = mongoose.model('Projects', contact_messagesSchema);

//Routes

// Get all projects data
app.get('/projects', async (req, res) =>{
    try{
        const projects = await Projects.find();
    }
    catch(err){
        res.status(500).json({message: 'Failed to fetch projects.'});
    }
});

// Get all education data
app.get('/education', async (req, res) =>{
    try{
        const education = await Education.find();
    }
    catch(err){
        res.status(500).json({message: 'Failed to fetch education.'});
    }
});

// Get all skills data
app.get('/skills', async (req, res) =>{
    try{
        const skills = await Skills.find();
    }
    catch(err){
        res.status(500).json({message: 'Failed to fetch skills.'});
    }
});

// Get all messages data
app.get('/contact', async (req, res) =>{
    try{
        const contact = await Contact.find();
    }
    catch(err){
        res.status(500).json({message: 'Failed to fetch contact.'});
    }
});

// Form submitting messages
app.post('/contact', async (req, res) => {
    try{
        const {name, email, message, timestamp} = req.body;
        const newMessage = new Contact({name, email, message, timestamp});
        await newMessage.save();
        res.json(newMessage);
    } catch(err){
        res.status(500).json({message: 'Failed to save message!'});
    }
});

//Start server!
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});