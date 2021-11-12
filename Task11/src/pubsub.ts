import redis from 'redis'
const subscriber = redis.createClient();
const publisher = redis.createClient();
subscriber.on("subscribe", function(channel,count) {
    publisher.publish("radio","good morning");
  });
subscriber.on("message",function(channel,message){
    console.log("subsctiber recived "+message+" from "+channel)
    subscriber.unsubscribe();
    subscriber.quit();
    publisher.quit();
})
export{subscriber}