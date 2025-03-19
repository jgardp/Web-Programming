//import modules
const express = required('express');
const loggerMiddle = require('./middlewares/loggerMiddleWare');
const apiRoute = require('./routes/api');

const app = express();
const PORT = 3000;

//Apply middleware...
app.use(express.json());
app.use(loggerMiddleware);

//Mount routes...
app.use('/api', apiRoutes);

//Error Handling...
app.use((err, req, res, next)=>{
    console.log(err.message);
    res.status(500).send({error: 'Internal Server Error'});
});

