"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redis = void 0;
var redis_1 = __importDefault(require("redis"));
var Redis = redis_1.default.createClient({
    port: 6379,
    host: '127.0.0.1'
});
exports.Redis = Redis;
function randomNumber() {
    var number = Math.floor(Math.random() * 1000).toString();
    Redis.lpush("stock", number);
}
setInterval(randomNumber, 800);
