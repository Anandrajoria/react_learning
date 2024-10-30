import "./keepUp.css";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { useState } from "react";

function KeepUp() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });

    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currData, indx) => {
        return indx !== id;
      })
    );
  };
  return (
    <>
      <Header />

      {/* <CreateNote /> */}
      {/* <Note /> */}
      <CreateNote passNote={addNote} />
      {/* <div className="note-container"></div> */}
      <div className="note-container">
        {addItem.map((val, index) => (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default KeepUp;
