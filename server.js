const express = require ('express');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 5000;

app.get('/hi', (req, res) => {
    res.send('Hello!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});