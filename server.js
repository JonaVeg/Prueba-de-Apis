const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
