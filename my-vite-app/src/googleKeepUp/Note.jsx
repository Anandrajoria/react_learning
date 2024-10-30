function Note(props) {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="keepNote">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        {/* <h1>title</h1>
        <p>content</p> */}
        <i className="fa fa-trash" onClick={deleteNote} aria-hidden="true"></i>
      </div>
    </>
  );
}

export default Note;
