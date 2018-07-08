exports.servisdata = function(req, res){
    var servisDataFile = require("../json/servis.json"); // path of your json file
    res.json(servisDataFile);
    res.send();
}