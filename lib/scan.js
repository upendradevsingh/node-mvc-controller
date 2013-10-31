var fs = require('fs');
var path = require('path');
var scan = function (dir, app){
  fs.readdir(dir, function(err, list){
    if(err){
      console.log(err);
    }
 
    list.forEach(function(file){
      file = dir + '/' + file;
      fs.stat(file, function(err, stat){
        if(stat.isDirectory()){
          scan(file, app);
    
        }else{
          require(file)(app);
        }
      });
      
   
      });
  });
};

module.exports = scan;