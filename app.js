const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Josev, another one. i think these time we did it all on our own!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
