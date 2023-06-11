const express = require('express');
const app = express();

// Definieer de gewenste serverroutes hier

const port = 3000;
app.listen(port, () => {
    console.log(`Server draait op http://localhost:${port}`);
});
