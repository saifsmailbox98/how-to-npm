     var http = require('http');
     var fs = require('fs');
     
     var server = http.createServer(function (request, response) { 
   
          request.on('data', function (data) {
                    data=data.toString();
               response.write(data.toUpperCase(),'utf8');
            
          });

     }); 
     
     server.listen(process.argv[2]);  