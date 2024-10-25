// import React from "react";
import "./keepUp.css";
function CreateNote() {
  return (
    <>
      <div className="main_note">
        <form className="main_form">
          <input
            type="text"
            name=""
            id=""
            placeholder="title"
            className="keepInput"
            autoComplete="off"
          />
          <textarea
            rows=" "
            placeholder="write a note..."
            className="keepText"
          ></textarea>
          <button className="keepButton">+</button>
        </form>
      </div>
    </>
  );
}

export default CreateNote;
