     var http = require('http');
     var fs = require('fs');
     var url = require('url');
     
     var server = http.createServer(function (request, response) { 
   
          response.writeHead(200, { 'Content-Type': 'application/json' });
          
          
          
          if(url.parse(request.url,true).pathname=="/api/parsetime"){
               
               var date =  new Date(url.parse(request.url,true).query.iso);
               var obj={
                    "hour" : date.getHours(),
                    "minute" : date.getMinutes(),  
                    "second" : date.getSeconds()
               }
           response.end(JSON.stringify(obj));
          }
          else if(url.parse(request.url,true).pathname=="/api/unixtime"){
               var date =  new Date(url.parse(request.url,true).query.iso);
               var obj={
                    "unixtime" : date.getTime()
               }
           response.end(JSON.stringify(obj));      
        
          }
          else
          response.end();
          
     }); 
     
     
    
     
     server.listen(process.argv[2]);  