import redis from 'redis'
const Redis= redis.createClient({
    port:6379,
    host:'127.0.0.1'
})
function randomNumber(){
    let number=Math.floor(Math.random()*1000).toString()
    Redis.lpush("stock",number)
}
setInterval(randomNumber,800)
export {Redis}