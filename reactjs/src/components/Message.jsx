function Message() {

  function handleClick(){
    console.log("button clicked");
    
  }
  return (
    <>
      <button onClick={handleClick}>click me to get message</button>
    </>
  );
}

export default Message;
