import "./NoteList.css";
import { useSelector, useDispatch } from "react-redux";
import { getNotesAsync, deleteNoteAsync, noteSelector } from "../../redux/reducers/noteReducers";
import { useEffect } from "react";

function NoteList() {
    const notes = useSelector(noteSelector);
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getNotesAsync());
  }, [dispatch]);

  return (
    <div className="container">
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
            <p>{new Date(note.createdOn).toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger"
            onClick={() => dispatch(deleteNoteAsync(note.id))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
