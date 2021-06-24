const fs = require("fs");
//fs.writeFileSync("input.txt", "Hellow whatsUp guys."+"\n"+ "My name is shabab naqvi");
const http = require("http");
const server = http.createServer( );
server.on("request", (req, res) =>{
   // var fs = require("fs");
   // fs.readFile("input.txt", (err, data) =>{
     //   if(err) return console.error(err);
       // res.end(data.toString());
    //});
    const rstream = fs.createReadStream("input.txt");
   // rstream.on("data", (chunkdata) =>{
     //    res.write(chunkdata);
    //});
    //rstream.on("end", () =>{
      //  res.end();
    //});
    rstream.pipe(res);
});

server.listen(8000, "127.0.0.1");