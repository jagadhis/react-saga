import React, { useState } from "react";
import Notes from "./components/Notes";
import "./style.css";

export default function App() {
  let [list, setList] = useState([]);
  let [newNote, setNewNote] = useState("");

  function addNote() {
    let addedNote = list.concat(newNote);
    setList(addedNote);
    setNewNote("");
  }

  function handleChange(e) {
    setNewNote(e.target.value);
  }

  return (
    <div className="App">
      <h1 className="head">My Notes</h1>
      <input
        className="input"
        type="text"
        value={newNote}
        onChange={handleChange}
      />

      <button className=" btn-1" onClick={addNote}>
        Save
      </button>
      <Notes data={list} />
    </div>
  );
}
