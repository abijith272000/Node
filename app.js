const http=require('http')

http.createServer((req,res)=>{
    console.log(req.url);
   
if(req.url=='/login'){
    res.writeHead(200,'OK',{'Content-Type':'text/html'})
    res.write('<h2>login</h2>')
    res.end()   
}
else if(req.url=='/register'){
    res.writeHead(200,'OK',{'Content-Type':'text/html'})
    res.write('<h2>register</h2>')
    res.end()   
}
      
    
}).listen(4000)