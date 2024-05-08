import express from "express";
import {
  AddNote,
  deleteNote,
  getNotes,
} from "../controllers/note-Controller.js";

const router = express.Router();

router.post("/addnote", AddNote);
router.get("/getnotes", getNotes);
router.get("/deletenote/:noteId", deleteNote);

export default router;
