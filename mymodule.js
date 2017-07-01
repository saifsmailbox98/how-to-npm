      var fs = require('fs');
 module.exports = function (dir, ext, callback) { 

     fs.readdir(dir, function(err,list){
    
    if(err)
    {
            callback(err);
    }
    else{
        var r = new RegExp("\."+ext+"$");
        list = list.filter(n => r.test(n));
        callback(err,list);
    }

});
     
     
 }  