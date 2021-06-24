const fs = require("fs");
const bioData = {
    name: "shabab",
    age: 21,
    area: "parachinar",
};
//1: convert to jason
const jasonData = JSON.stringify(bioData);
console.log(jasonData);
//2: add into other file
fs.writeFile("json1.json", jasonData, (err)=>{
    console.log("done");
});
//3: read file
//4: again convert back to obj
//5: console.log
fs.readFile("json1.json", "utf-8", (err, data)=>{
    const orgData = JSON.parse(jasonData);
    console.log(data);
    console.log(orgData);
     
    
   
});








//const jasonData = JSON.stringify(bioData);
//console.log(jasonData);
//{"name":"shabab","age":21,"area":"parachinar"}


//const objData = JSON.parse(jasonData);
//console.log(objData.name);
//{ name: 'shabab', age: 21, area: 'parachinar' }