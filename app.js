const express = require('express');
const path = require('path');
const port = 3000;

app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
    //console.log(__dirname + '/index.html');
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/playground/sorting_visualizer', function (req, res) {
    //console.log(req)
    res.sendFile(path.join(__dirname + '/public/playground/sorting_visualizer/sorting_visualizer.html'));
})

app.listen(port, () => console.log('Server running on port ' + port));