import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is started in port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);