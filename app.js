const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome user')
    }
if(req.url === '/about'){
    res.end('Here is our short history')
}
res.end(
    `<h1>Oops!!</h>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back to home</a>`
)
})

server.listen(5000)


const _= require('lodash');

const items = [1, [2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);