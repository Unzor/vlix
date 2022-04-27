# Vlix
A library that lets you communicate to other computers.

# Examples
## Create server

```js
var Vlix = require("vlix");
var {
    Server
} = new Vlix();
var server = new Server(8080);
server.on("hello", function(message, client){
  client.send("Hello " + message + "!");
})
```

## Connect to server
### Node.js
```js
var Vlix = require("vlix");
var {
    Client
} = new Vlix();
var server = new Client("<URL of server here>");
server.send("hello", "World", function(msg) {
    console.log(msg); // Hello World!
    server.close();
});
```

# License
```
MIT License

Copyright (c) 2022 Unzor

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
