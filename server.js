const app = require('express')();
app.listen(process.env.PORT);

app.get('/', (req, res, next)=> res.send('hello'));
