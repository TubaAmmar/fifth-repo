const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req,res)=>{
    res.send('Hello whatsup guyssssssss')
});


app.listen(port, function() {
    console.log(`we are listing at ${port}`);
  });
 

