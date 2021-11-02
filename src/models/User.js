import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  profileImage: { type: String, required: false },
  statistics: { type: Array, required: false },
  settings: { type: Array, required: false },
});

const User = mongoose.model("User", UserSchema);
export default User;
