const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is started in port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);