const logEvents = require("./logEvent");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

//inititalize object
const myEmitter = new MyEmitter();

//add listner for log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  myEmitter.emit("log", "Log Event Emitted!");
}, 200); 
