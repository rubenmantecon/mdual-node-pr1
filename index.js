const express = require('express');
const app = express();
const port = 3000;
const html_text = 'Hello, Pepe!';

app.get('/', (req, res) => {
	res.send(html_text);
});

app.post('/post', (req, res) => {
	res.send(html_text);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
