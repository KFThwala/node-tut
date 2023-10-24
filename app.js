const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("Welcome to the home page")
    }
    if(req.url === "/about") {
        res.end("This is the about page")

    }
    res.end(`
<h1>Oopps!</h1>
<p>Sorry we could not find the page you were looking for</p>
<a href="/">Back Home</a>
    `)

})  

server.listen(5000)

