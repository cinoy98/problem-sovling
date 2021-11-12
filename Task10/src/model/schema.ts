import mongoose from 'mongoose';
let userSchema: any = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    fathername: {
        type: String,
        required: true
    },
    maritalstatus: {
        type: String,
        required: true
    }
})
var user = mongoose.model('user', userSchema);
export { user };