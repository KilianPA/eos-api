const WebSocket = require('ws');

const ws = new WebSocket('ws://127.0.0.1:8887/v1/chain/get_info');

ws.on('open', function open() {
  console.log('open');
  ws.on('message', function message(data) {
    console.log(JSON.parse(data.toString()));
  });
});
