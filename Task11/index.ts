import redis from 'redis'
import express from 'express'
import { logger } from './src/logger'
import{subscriber} from './src/pubsub'
import{app} from './src/promise'
const client = redis.createClient({
    port: 6379,
    host: '127.0.0.1'
});
client.on('error', function (error) {
    console.error(error)
})
const port = process.env.Port || 1000;

//strings
client.set("key", "value", redis.print);
client.get("key", redis.print);
client.getrange("key", 1, 3, (err, reply) => { //substring
    logger.info(reply)
})
client.getset("key", "new", (err, reply) => { //change
    logger.info(reply)
})
client.setex("key1", 60, "seconds")//value with expiry seconds
client.setnx("key2", "next") //set if not exist
client.strlen("key2", (err, reply) => { //length of value
    logger.info(reply)
})
client.set("key3", "1")
client.incr("key3")
client.get("key3", (err, reply) => {
    logger.info(reply)
})
client.psetex("key8", 600, "milliseconds", (err, reply) => {
    logger.info(reply)
})
client.append("key3", "appended")


//hashes
client.hmset("user:1", "username", "cinoy28", redis.print);
client.HGETALL("user:1", (err, reply) => {
    logger.info(reply.username)
})

client.hmset("user:2", ["username", "cinoy28", "password", "123456"], redis.print);
client.HGETALL("user:2", (err, reply) => {
    logger.info(reply)
})
client.hlen("user:2", (err, reply) => {
    logger.info(reply)
})
client.hvals("user:2", (err, reply) => {
    logger.info(reply)
})

client.hset("id", "num", "1");
client.hincrby("id", "num", 2, (err, reply) => {
    logger.info(reply)
})
client.hsetnx("user:3", "name", "rambo")
client.hdel("user:3", "name")


//list 
client.lpush("hello", "cinoy");
client.lpush("hello", "abi");
client.lpush("hello", "aswin");
client.lrange("hello", 0, 2, (err, reply) => {
    logger.info(reply)
})
client.lindex("hello", 1, (err, reply) => {
    logger.info(reply)
})
client.linsert("hello", 'BEFORE', "abi", "rojith")
client.brpoplpush("hello", "new", 60, (err, reply) => {
    logger.info(reply)
})
client.lpop("hello")
client.lrange("hello", 0, 1, (err, reply) => {
    logger.info(reply)
})
client.blpop("hello", 10, (err, reply) => {
    logger.info(reply)
})
client.brpop("hello", 10, (err, reply) => {
    logger.info(reply)
})
client.lrem("hello", 1, "abi", (err, reply) => {
    logger.info(reply)
})


//sets
client.sadd("set1", "pranav", "sudan", "shyam", "ms")
client.scard("set1", (err, reply) => {
    logger.info(reply)
})
client.sadd("set2", "sudan", "hari")
client.sdiff("set1", "set2", (err, reply) => {
    logger.info(reply)
})
client.sadd("set3", "ms", "dilu")
client.sadd("set4", "ribin", "aswin")
client.sinterstore("intersect", "set1", "set3")
client.sdiffstore("difference", "set1", "set2")
client.sunionstore("union", "set1", "set4")
client.smembers("intersect", (err, reply) => {
    logger.info(reply)
})
client.smembers("difference", (err, reply) => {
    logger.info(reply)
})
client.smembers("union", (err, reply) => {
    logger.info(reply)
})
client.srandmember("union", (err, reply) => {
    logger.info(reply)
})
client.multi().
    scard("union").
    smembers("union").
    exec((err,replies)=>{
        replies.forEach((reply,index)=>{
            logger.info(`transaction ${reply.toString()}`)
        })
    })

//sorted set
client.zadd("sorted", "1", "cinoy")
client.zadd("sorted", "2", "rahul")
client.zcard("sorted", (err, reply) => {
    logger.info(reply)
})
client.zcount("sorted", 1, 3, (err, reply) => {
    logger.info(reply)
})
client.zadd("sorted2", ["1", "naveen", "2", "rahul", "3", "cinoy"])
client.zrange("sorted2",0,-1,(err,reply)=>{
    logger.info(reply)
})
client.zrank("sorted2","cinoy",(err,reply)=>{
    if(!err){
        logger.info(reply)
    }
    else{
        logger.info(err)
    }
})
client.zinterstore("new",2,"sorted","sorted2")
client.zrange("new",0,-1,(err,reply)=>{
    logger.info(reply)
})
client.zrangebyscore("sorted2",1,3,(err,reply)=>{
    if(!err){
        logger.info(reply)
    }
    else{
        logger.info(err)
    }
})

subscriber.subscribe("radio");
app()




