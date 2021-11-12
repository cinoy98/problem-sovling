"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redis_1 = __importDefault(require("redis"));
var logger_1 = require("./src/logger");
var pubsub_1 = require("./src/pubsub");
var promise_1 = require("./src/promise");
var client = redis_1.default.createClient({
    port: 6379,
    host: '127.0.0.1'
});
client.on('error', function (error) {
    console.error(error);
});
var port = process.env.Port || 1000;
//strings
client.set("key", "value", redis_1.default.print);
client.get("key", redis_1.default.print);
client.getrange("key", 1, 3, function (err, reply) {
    logger_1.logger.info(reply);
});
client.getset("key", "new", function (err, reply) {
    logger_1.logger.info(reply);
});
client.setex("key1", 60, "seconds"); //value with expiry seconds
client.setnx("key2", "next"); //set if not exist
client.strlen("key2", function (err, reply) {
    logger_1.logger.info(reply);
});
client.set("key3", "1");
client.incr("key3");
client.get("key3", function (err, reply) {
    logger_1.logger.info(reply);
});
client.psetex("key8", 600, "milliseconds", function (err, reply) {
    logger_1.logger.info(reply);
});
client.append("key3", "appended");
//hashes
client.hmset("user:1", "username", "cinoy28", redis_1.default.print);
client.HGETALL("user:1", function (err, reply) {
    logger_1.logger.info(reply.username);
});
client.hmset("user:2", ["username", "cinoy28", "password", "123456"], redis_1.default.print);
client.HGETALL("user:2", function (err, reply) {
    logger_1.logger.info(reply);
});
client.hlen("user:2", function (err, reply) {
    logger_1.logger.info(reply);
});
client.hvals("user:2", function (err, reply) {
    logger_1.logger.info(reply);
});
client.hset("id", "num", "1");
client.hincrby("id", "num", 2, function (err, reply) {
    logger_1.logger.info(reply);
});
client.hsetnx("user:3", "name", "rambo");
client.hdel("user:3", "name");
//list 
client.lpush("hello", "cinoy");
client.lpush("hello", "abi");
client.lpush("hello", "aswin");
client.lrange("hello", 0, 2, function (err, reply) {
    logger_1.logger.info(reply);
});
client.lindex("hello", 1, function (err, reply) {
    logger_1.logger.info(reply);
});
client.linsert("hello", 'BEFORE', "abi", "rojith");
client.brpoplpush("hello", "new", 60, function (err, reply) {
    logger_1.logger.info(reply);
});
client.lpop("hello");
client.lrange("hello", 0, 1, function (err, reply) {
    logger_1.logger.info(reply);
});
client.blpop("hello", 10, function (err, reply) {
    logger_1.logger.info(reply);
});
client.brpop("hello", 10, function (err, reply) {
    logger_1.logger.info(reply);
});
client.lrem("hello", 1, "abi", function (err, reply) {
    logger_1.logger.info(reply);
});
//sets
client.sadd("set1", "pranav", "sudan", "shyam", "ms");
client.scard("set1", function (err, reply) {
    logger_1.logger.info(reply);
});
client.sadd("set2", "sudan", "hari");
client.sdiff("set1", "set2", function (err, reply) {
    logger_1.logger.info(reply);
});
client.sadd("set3", "ms", "dilu");
client.sadd("set4", "ribin", "aswin");
client.sinterstore("intersect", "set1", "set3");
client.sdiffstore("difference", "set1", "set2");
client.sunionstore("union", "set1", "set4");
client.smembers("intersect", function (err, reply) {
    logger_1.logger.info(reply);
});
client.smembers("difference", function (err, reply) {
    logger_1.logger.info(reply);
});
client.smembers("union", function (err, reply) {
    logger_1.logger.info(reply);
});
client.srandmember("union", function (err, reply) {
    logger_1.logger.info(reply);
});
client.multi().
    scard("union").
    smembers("union").
    exec(function (err, replies) {
    replies.forEach(function (reply, index) {
        logger_1.logger.info("transaction " + reply.toString());
    });
});
//sorted set
client.zadd("sorted", "1", "cinoy");
client.zadd("sorted", "2", "rahul");
client.zcard("sorted", function (err, reply) {
    logger_1.logger.info(reply);
});
client.zcount("sorted", 1, 3, function (err, reply) {
    logger_1.logger.info(reply);
});
client.zadd("sorted2", ["1", "naveen", "2", "rahul", "3", "cinoy"]);
client.zrange("sorted2", 0, -1, function (err, reply) {
    logger_1.logger.info(reply);
});
client.zrank("sorted2", "cinoy", function (err, reply) {
    if (!err) {
        logger_1.logger.info(reply);
    }
    else {
        logger_1.logger.info(err);
    }
});
client.zinterstore("new", 2, "sorted", "sorted2");
client.zrange("new", 0, -1, function (err, reply) {
    logger_1.logger.info(reply);
});
client.zrangebyscore("sorted2", 1, 3, function (err, reply) {
    if (!err) {
        logger_1.logger.info(reply);
    }
    else {
        logger_1.logger.info(err);
    }
});
pubsub_1.subscriber.subscribe("radio");
promise_1.app();
