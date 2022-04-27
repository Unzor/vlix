var { WebSocket } = require('ws');
var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

class VlixServer {
    constructor(p) {
        this.port = p;
    }
    on(path, f) {
            app.ws('/' + path, function(ws, req) {
                ws.on('message', function(msg) {
                    f(msg, ws)
                });
            });
        }
        run(f) {
            typeof f !== 'undefined' ? app.listen(this.port, f) : app.listen(this.port)
        }
}

class VlixConnect {
  constructor(p) {
    this.base_url = (new URL(p).protocol == "https:" ? "wss://" : "ws://") + new URL(p).hostname + "/"
  }
  send(a, b, c){
    this.ws = new WebSocket(this.base_url + a);
    var ws = this.ws;
    ws.on('message', function(m){
      c(m.toString())
    });
    ws.on('open', function() {
        ws.send(b);
    });
  }
  close() {
    this.ws.terminate();
  }
}

class Vlix {
  constructor() {
    return {
      Server: VlixServer,
      Client: VlixConnect
    }
  }  
}

module.exports = Vlix;
