import { model, Schema } from "mongoose";
import { TUser, UserModel } from "./user.interface";

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [3, 'Name must be at least 3 characters long'],
    maxlength: [20, 'Name must be at most 20 characters long'],
    trim: true,
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email must be unique'],
    validate: {
      validator: function (v: string) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(v);
      },
      message: (props: {value: string}) => `${props.value} is not a valid email address!`
    }
  },
photo: String, // Optional field, can be null
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  role: {
    type: String,
    enum: {
      values: ["user", "admin"],
      message: '{VALUE} is not a valid role. Please provide either "user" or "admin".',
    },
    default: "user",
    required: [true, 'Role is required'],
  },
  userStatus: {
    type: String,
    required: [true, 'User status is required'],
    enum: {
      values: ["active", "inactive", "banned"],
      message: '{VALUE} is not a valid user status. Please provide either "active", "inactive", or "banned".',
    },
    default: "active",
  },
});

// pre middleware 
// userSchema.pre('find', function (next) { 
//   this.find({userStatus: 'inactive'})
// //  this.find({userStatus: {$eq: 'active'}})
//   next()
// }) 

// post middleware
userSchema.post('find', function (docs, next) {
  docs.forEach((doc : TUser) => {
    // doc.name = doc.name.toUpperCase()
   doc.name = doc.name.split(' ')[0]
})
  next();
  
})

const User = model<TUser, UserModel>('User', userSchema)

export default User;