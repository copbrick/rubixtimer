import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  //Our Schema
  times: { type: Array, required: false },
  statistics: { type: Array, required: false },
  settings: { type: Array, required: false },
  profileImage: { type: String, required: false },

  //Auth0 additional fields
  tenant: { type: String, required: false },
  client_id: { type: String, required: false },
  connection: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  transaction: { type: Object, required: false },
  request_language: { type: String, required: false },
  email_verified: { type: Boolean, required: false },
});

const User = mongoose.model("User", UserSchema);
export default User;
