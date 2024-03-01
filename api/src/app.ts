const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json({ type: 'application/json' }));

app.use(cors());

app.listen(port, () => console.log(`Express app running on port ${port}!`));
