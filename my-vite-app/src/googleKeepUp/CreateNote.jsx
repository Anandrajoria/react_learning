import { useState } from "react";
import "./keepUp.css";

function CreateNote(props) {

  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  function InputEvent(event) {
    const { name, value } = event.target;

    setnote((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(note);
  }

  function addEvent(event) {
    event.preventDefault();
    props.passNote(note);
    setnote({ title: "", content: "" });
    console.log("clicked");
  }
  return (
    <>
      <div className="main_note">
        <form className="main_form">
          <input
            type="text"
            name="title"
            id=""
            placeholder="title"
            className="keepInput"
            autoComplete="off"
            value={note.title}
            onChange={InputEvent}
          />
          
          <textarea
            rows=" "
            placeholder="write a note..."
            className="keepText"
            onChange={InputEvent}
            value={note.content}
            name="content"
          ></textarea>
          <div className="keepmain-button">
            <button onClick={addEvent} className="keepButton">
              +
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateNote;
