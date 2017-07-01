var http = require('http');

http.get(process.argv[2],function(response){
    
     response.on("data", function (data) { 
         
         data=data.toString();
         
         console.log(data);
     });
    
    
});