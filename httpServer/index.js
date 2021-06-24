const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) =>{
    const data = fs.readFile(`${__dirname}/userApi/userapi.json`, "utf-8");
        const objData = JSON.parse(data);

    //console.log(req.url);
    if(req.url == "/"){
        res.end("Hello from the other side Naqvi");
    } else if(req.url == "/about"){
        res.end("Hello from the aboutUS side ");
    }else if(req.url == "/contact"){
        res.end("Hello from the contactUS side");
    }else if(req.url == "/userapi"){
        res.writeHead(200, { "content-type": "application/json"});
            res.end(objData[1].name);
     }
    else{
        res.writeHead(404, {"Content-type": "text/html" });
        res.end("<h1> 404 error pages. page doesn't exist </h1>");
    }
    
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listining to the port no 8000");
});