const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('This is callback for app.get("/")');
    console.log(req.url);
    // res.send({ name: 'mango' });
    res.send('<h1>Hi, this is "/"</h1>');

});
app.get('/about', (req, res) => {
    console.log('This is callback for app.get("/about")');
    console.log(req.url);
});

app.listen(1988, () => console.log(`Application servsr is running on port ${1988}`));