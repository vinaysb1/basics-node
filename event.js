const EventEmitter = require('events')
const emitter = new EventEmitter()
emitter.on("greet",()=> console.log("hello"))
emitter.emit("greet")