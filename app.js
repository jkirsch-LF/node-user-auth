const express = require('express');
const app = express();



app.get('/', (req, res)=>{
    res.send('<h1>App working</h1>');
})


const PORT = process.env.PORT || 9000;
app.listen(PORT, ()=>{
    console.log("Server has successfully start on port ", PORT);
})