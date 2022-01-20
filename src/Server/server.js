const express = require('express');
const cors = require('cors');
const appServer = express();

appServer.use(cors());

appServer.use(
    express.urlencoded({
      extended: true
    })
);
  
appServer.use(express.json());

// login api created with node and express.
appServer.use('/login', (req, res) => {
    res.send({
        user: req.body,
        token: 'test123',
    });
});

// server listening to port 8080.
appServer.listen(8080, () => console.log('API is running on http://localhost:8080/login'));