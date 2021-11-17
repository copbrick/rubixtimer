import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  //Our Schema
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
  
  //verify email - auth0 as well
  email_verified: { type: String, required: false, default: false },
});

const User = mongoose.model("User", UserSchema);
export default User;
