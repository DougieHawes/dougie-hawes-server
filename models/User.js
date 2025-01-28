import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: True,
  },
  email: {
    type: String,
    required: True,
  },
  password: {
    type: String,
    required: True,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
