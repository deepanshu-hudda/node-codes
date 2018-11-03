var events=require('events');
var eventEmitter=new events.EventEmitter();
eventEmitter.on('clicked',()=>{
    console.log("button is clicked");
})

eventEmitter.emit('clicked');