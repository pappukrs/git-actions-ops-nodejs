const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Node.js app running in Kubernetes!');
});

app.listen(3000, () => {
    console.log('App is running on port 3000');
});
