import mongoose from 'mongoose' 

const userSchem = new mongoose.Schema({
  name: {
    type:String,
    required: true,
  },
  email: {
    type:String,
    required: true,
    unique: true,
  },
  password: {
    type:String,
    required: true,
  }
});


const User = new mongoose.model("user",userSchem) ;

export default User;