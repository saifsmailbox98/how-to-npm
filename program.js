var http = require('http');

http.get(process.argv[2],function(response){
    var sum=0;
    var string="";
    
     response.on("data", function (data) { 
         
         data=data.toString();
         
         sum+=data.length;
         string+=data;
     });
     
    response.on("end", function(){
        console.log(sum);
        console.log(string);
    });
    
});