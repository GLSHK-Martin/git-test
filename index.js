const express = require('express')
const app = express()
const port = 3000

var strJSON=require('./JSON-raw');

var content = JSON.parse(strJSON);

var strAWBPrefix = '012';
var strAWBSuffix = '11111111';

content.Data[0].FreightStatus.AWBPrefix = strAWBPrefix;
content.Data[0].FreightStatus.AWBSuffix = strAWBSuffix;

//console.log("Content" + JSON.stringify(content, null, 2));

app.get('/', (req, res) => res.send('Welcome GLSHK'))

app.get("/api/Test", (req, res, next) => {


// var stringified = JSON.stringify(strJSON);
// stringified = stringified.replace('"AWBPrefix":"618"', '"AWBPrefix":"999"');
// res.json(stringified);

res.json(content);

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
