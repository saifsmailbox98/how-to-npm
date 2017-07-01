var http = require('http');

http.get(process.argv[2],function(response){
    
    var string="";
    
     response.on("data", function (data) { 
         
         data=data.toString();
         string+=data;
     });
     
    response.on("end", function(){
   
        console.log(string);
        http.get(process.argv[3],function(response){
    
    var string="";
    
     response.on("data", function (data) { 
         
         data=data.toString();
         string+=data;
     });
     
    response.on("end", function(){
   
        console.log(string);
        http.get(process.argv[4],function(response){
    
    var string="";
    
     response.on("data", function (data) { 
         
         data=data.toString();
         string+=data;
     });
     
    response.on("end", function(){
   
        console.log(string);
        
    });
    
});
    });
    
});
    });
    
});