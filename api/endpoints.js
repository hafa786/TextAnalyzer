// Api endpoints //
var PORT = process.env.PORT || 5000 ;
let express = require("express");
var app = express();
const fn = require("../api/functions");

app.listen(PORT,() => {
    console.log(`Text analyzer app is running`);
   });

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// ******************* insert data ***********************
app.post("/textanalyzer", (req, res, next) => {
    var textString = req.headers.text
    // calling functions
    res.json({"textLength":fn.textLength(textString),"wordCount":fn.wordCount(textString),"characterCount":fn.characterCount(textString)})
});