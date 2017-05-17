var express = require('express');
var app = express();

app.get('/:dateStr', function (req, res) {
    var date = req.query;
    var natStrDate;
    var numDate;
    var resObj = 
    {
        unix: "",
        natural: ""
    };

    res.writeHead(200, {'content-type':'text/html'});
    res.write("Hello there");

    natStrDate = new Date(req.params.dateStr);
    numDate = new Date(Number(req.params.dateStr));

    if(isFinite(natStrDate)) {
        resObj.natural = req.params.dateStr;
        resObj.unix = Date.parse(natStrDate);
    } else if(isFinite(numDate)) {
        //resObj.natural = numDate.getMonth() + " " + 
            //numDate.getDate() + ", " + numDate.getYear();
        resObj.natural = numDate.toDateString();
        resObj.unix = Date.parse(numDate);
    }
    res.write(JSON.stringify(resObj));
    res.end();
})

app.listen(8080, function () {
  console.log('App listening on port 3000!')
})
