"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriber = void 0;
var redis_1 = __importDefault(require("redis"));
var subscriber = redis_1.default.createClient();
exports.subscriber = subscriber;
var publisher = redis_1.default.createClient();
subscriber.on("subscribe", function (channel, count) {
    publisher.publish("radio", "good morning");
});
subscriber.on("message", function (channel, message) {
    console.log("subsctiber recived " + message + " from " + channel);
    subscriber.unsubscribe();
    subscriber.quit();
    publisher.quit();
});
