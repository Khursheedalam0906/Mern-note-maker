import Addnote from "../models/addNote-Schema.js";

export const AddNote = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    if (data) {
      const newNote = new Addnote(data);
      await newNote.save();
      return res.status(201).json({ message: "Save successfully" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getNotes = async (req, res) => {
  try {
    const allnotes = await Addnote.find({});
    return res.status(200).json(allnotes);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteNote = async (req, res) => {
  const id = req.params.noteId;
  console.log(id);
  try {
    await Addnote.findByIdAndDelete(id);
    return res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
