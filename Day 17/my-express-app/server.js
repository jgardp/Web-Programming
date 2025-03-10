const express = require("express");
const app = express();

//Sample Data
const users = [
    {id: 1, name:"Alice"},
    {id: 2, name:"Bob"},
];

const products = [
    {id:1, name:"Laptop", price: 999},
    {id:2, name:"Phone", price: 699},
    {id:3, name:"Smartwatch", price: 299},
    {id:4, name:"Console", price: 799},
    {id:5, name:"Desktop", price: 1099},
    {id:6, name:"Monitor", price: 499},
];

const fruits = [
    {id:1, name:"Strawberries", price: 5.99},
    {id:2, name:"Pears", price: 3.99},
    {id:3, name:"Peaches", price: 4.99},
    {id:4, name:"Watermelons", price: 7.99},
]

const clothes = [
    {id:1, type:"Shoes", brand: "Adidas"},
    {id:2, type:"T-Shirt", brand: "Fruit of the Loom"},
    {id:3, type:"Pants", brand: "Puma"},
    {id:4, type:"Hoodie", brand: "Nike"},
]

const classes = [
    {id:1, name:"Chemistry", professor: "Mr.Gold"},
    {id:2, name:"Math", professor: "Mr.Algebra"},
    {id:3, name:"History", professor: "Miss.Time"},
    {id:4, name:"English", professor: "Mrs.Letter"},
]

const vehicles = [
    {id:1, make:"Ford", model: "Explorer"},
    {id:2, make:"Toyota", model: "Camry"},
    {id:3, make:"Honda", model: "Civic"},
    {id:4, make:"Tesla", model: "Cybertruck"},
]

//Routing... req = request from client   res = response from server
app.get("/", (req, res) => res.send("Welcome to my API!"));

app.get("/users", (req, res) => res.json(users));

app.get("/products", (req, res) => res.json(products));

app.get("/fruits", (req, res) => res.json(fruits));

app.get("/clothes", (req, res) => res.json(clothes));

app.get("/vehicles", (req, res) => res.json(vehicles));

//Start server...
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));