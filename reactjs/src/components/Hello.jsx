//! destructuring of props


function Hello(props) {
//   const { name, message } = props;
// props.name='monika'

  return (
    <h1>
      {props.message} {props.name}
    </h1>
  );
}
export default Hello;
 

// function Hello({name,message,emoji}) {
    
  
//     return (
//       <h1>
//         {message} {name}  {emoji}
//       </h1>
//     );
//   }
//   export default Hello;
  