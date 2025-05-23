const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Connect to MongoDB

mongoose.connect('mongodb://localhost:27017/blogDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log('MongoDB Connected'))
.catch((err)=>console.error('MongoDB error', err));

//Define schema and model

const postSchema = new mongoose.Schema({
    title: String,
    body: String,
})

const Post = mongoose.model('Post', postSchema);

//Add routes...

app.get('/posts', async (req, res) =>{
    try{
        const posts = await Post.find();
    }
    catch(err){
        res.status(500).json({message: 'Failed to fetch posts'});
    }
});

app.post('/posts', async (req, res) => {
    try{
        const {title, body} = req.body;
        const newPost = new Post({title, body});
        await newPost.save();
        res.json(newPost);
    } catch(err){
        res.status(500).json({message: 'Failed to save post!'});
    }
});

app.delete('/posts/:id', async (req, res) =>{
    try{
        const deletePost = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Successfully deleted post!'})
    }
    catch(err){
        res.status(500).json({message: 'Failed to delete posts.'});
    }
});

app.put('/posts/:id', async (req, res) =>{
    try{
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({message: 'Successfully updated post!'})
    }
    catch(err){
        res.status(500).json({message: 'Failed to update posts.'});
    }
});

//Start server!

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});