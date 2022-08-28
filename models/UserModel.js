import mongoose from "mongoose";

const User = mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", User);
