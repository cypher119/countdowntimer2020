var express = require('express')
var app = express();

app.use(express.static('public'));

app.listen(5001,()=>{
    console.log('listening to port 5001');
});
