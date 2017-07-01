var net = require('net');

var server = net.createServer(function(socket){
    var date = new Date();
    var yyyy = date.getFullYear();
    var mm = date.getMonth()+1;
    mm = mm>9?mm:"0"+mm;
    var dd = date.getDate()>9?date.getDate():"0"+date.getDate();
    var hh = date.getHours();
    hh = hh>9?hh:"0"+hh;
    var m = date.getMinutes();
    m = m>9?m:"0"+m;
    var str = yyyy+"-"+mm+"-"+dd+" "+hh+":"+m;
    //console.log(str);
    socket.end(str+"\n");

});

server.listen(process.argv[2]);