var glob = require("glob");
var fs = require("fs");
var async = require("async");
var before = Date.parse("2014-10-06 00:00:00 -0700");
var after = Date.parse("2014-10-07 00:00:00 -0700");

// all minutes
var bins = {};

console.time("all");
function parseFileFunc(fname, date) {
  return function(callback) {
    var saxStream = require("sax").createStream(true, {})
    saxStream.on("opentag",function (node) {
      if(node.name == 'vehicle') bins[date] = bins[date] + 1;
    });
    saxStream.on("error", function (e) { callback(e); })
    saxStream.on("end",function() { callback(null,"Done"); });
    fs.createReadStream(fname).pipe(saxStream);
  }
}

var funcs = [];
glob("sf-muni/*.xml", null, function (err, files) {
  files.forEach(function(fname) {
    date = new Date(fname.match(/[0-9]+/)[0]*1000);
    if (date < before || date > after) return;
    funcs.push(parseFileFunc(fname, date));
    bins[date] = 0;
  });
  
  async.series(funcs, function(err,results) {
    if(err) console.log(err);
    console.log(bins);
  });
})
