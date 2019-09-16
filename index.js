const express = require('express');
const app = express();

// app --> express app to register this route handler with
// get --> watch for incoming requests with this method
// '/' --> watch for requests trying to acces '/' 
// req --> Object representing incoming requests
// res --> object representing the outgoing response
// res.send({hi: 'there'}) --> immediately send some JSON back to who ever made this request
// app.listen(5000) --> tells node to listen for port 5000 
app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);