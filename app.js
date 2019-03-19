const http = require("http");
const Koa = require('koa');
const serve = require('koa-static')
const app = new Koa();

const port = 8888;

app.use(serve(__dirname + "/dist",{ extensions: ['html']}));
app.listen(port)

console.log(`请打开 127.0.0.1:${port} 祝您工作愉快！！`)