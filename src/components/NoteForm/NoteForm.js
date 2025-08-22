import { useState } from "react";
import "./NoteForm.css";
import { useDispatch, useSelector } from "react-redux";
import { addNoteAsync, getNotesAsync } from "../../redux/reducers/noteReducers";
import { notificatioSelector, resetNotification } from "../../redux/reducers/notificationReducers";

function NoteForm() {
  const dispatch = useDispatch();
  const [noteText, setNoteText] = useState("");
  const message = useSelector(notificatioSelector)

  if(message){
    setTimeout(()=>{
      dispatch(resetNotification())
    }, 5000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noteText.trim()) return;
    dispatch(addNoteAsync(noteText))
    .unwrap()
    .then(() => dispatch(getNotesAsync()));
    setNoteText("");
  };

  return (
    <div className="container">
      {message && <div class="alert alert-success" role="alert">
        {message}
        </div> }
      
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        className="form-control mb-3"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <div className="center-btn"><button className="btn btn-success " type="submit">Create Note</button></div>
      
    </form>
    </div>
  );
}

export default NoteForm;
