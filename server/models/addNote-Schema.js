import mongoose from "mongoose";

const addnoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
  },
  { timestamps: true }
);

const Addnote = mongoose.model("note", addnoteSchema);

export default Addnote;
