const path = require('path');

const express = require('express');

const app = express();
const port = 3000;
// Setup paths
const publicDir = path.join(__dirname, './src');
app.use(express.static(publicDir));

app.listen(port, _ => {
	console.log(`Server running on port ${port}...`);
});
