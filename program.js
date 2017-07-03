    var express = require('express');
    
    var app = express();
    
    app.use(express.static(process.argv[3]||"index.html".join(__dirname, 'public')));
    
    app.get('/', function(request, response) {
      
     
      
      
      
      response.end();
    })
    
  
    app.listen(process.argv[2]);