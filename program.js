    var fs = require('fs');
fs.readdir(process.argv[2],function(err,list){
    
    if(!err)
    {
        var r = new RegExp("\."+process.argv[3]+"$");
        list = list.filter(n => r.test(n));
        list.map(function(n){ console.log(n);})
    
    }

})