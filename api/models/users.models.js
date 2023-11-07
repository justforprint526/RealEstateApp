import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    UserName:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true,
    },
        
    email:{
        type:String,
        required:true,
        unique:true
    }
}, {timestamps:true});

const User = new mongoose.Model('User', userSchema);

export default User;