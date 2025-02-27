//! destructuring of props

/*
function Hello(props) {
//   const { name, message } = props;
// props.name='aditya'

  return (
    <h1>
       {props.message} {props.emoji} {props.name}
    </h1>
  );
}
export default Hello;
 
*/

// function Hello(props) {
// it can also be  written as
function Hello({ person }) {
  return (
    <h1>
      {/* 1: but here we have to write like this */}
      {person.message} {person.name} {person.emoji} {person.seatNumbers}
    </h1>
  );
}
export default Hello;
