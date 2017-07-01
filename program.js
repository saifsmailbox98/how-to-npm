var mymodule = require('./mymodule.js') 

var myList = mymodule(process.argv[2],process.argv[3],printList);

function printList(err, data){
    
 if(err)  
 
 {
     console.log(err);
 
 }
 else{
      data.map(n => console.log(n));
 }
    
    
}