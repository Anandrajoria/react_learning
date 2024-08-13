// export  default function Profile() {
//     return (
//         <>
//       <Avatar
//         person={{ name: 'Lin Lanying', imageId: 'https://imgs.search.brave.com/KJm5w-cbELGkNcYvZ6RLPOkg9y9vZK_xGQGWeDH31N8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L1BlbmNpbF9k/cmF3aW5nX29mX2Ff/Z2lybF9pbl9lY3N0/YXN5LmpwZw' }}
//         size={400}
//       />

//       <Avatar
//         person={{ name: 'aditya', imageId: 'https://imgs.search.brave.com/KaFQ1fh3X1ctYh5yMGPIlsEwRe5g76xLOhFZ6eHyR1w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/NS8wNS8wMi8zNy9z/dW5zZXQtMTM3MzE3/MV82NDAuanBn' }}
//         size={400}
//       />
//       </>
//     );
// }

//         function Avatar({person,size}) {
//             return (
//               <img
//                 className="avatar"
//                 src={person.imageId}
//                 alt={person.name}
//                 width={size}
//                 height={size}
//               />
//             );
//           }

// export function getImageUrl(imageId, size = 's') {
//     return (
//       'https://i.imgur.com/' +
//       imageId +
//       size +
//       '.jpg'
//     );
//   }


// function Profile({
//     imageId,name,profession,awards,discovery,imageSize=70
// }){
//     return(
//         <section className="profile">
//             <h2>{name}</h2>
//             <img
//         className="avatar"
//         src={getImageUrl(imageId)}
//         alt={name}
//         width={imageSize}
//         height={imageSize}
//       />
//        <ul>
//         <li><b>Profession:</b> {profession}</li>
//         <li>
//           <b>Awards: {awards.length} </b>
//           ({awards.join(', ')})
//         </li>
//         <li>
//           <b>Discovered: </b>
//           {discovery}
//         </li>
//       </ul>
//         </section>
//     )
// }

// export default function Gallery() {
//     return (
//       <div>
//         <h1>Notable Scientists</h1>
//         <Profile
//           imageId="szV5sdG"
//           name="Maria Skłodowska-Curie"
//           profession="physicist and chemist"
//           discovery="polonium (chemical element)"
//           awards={[
//             'Nobel Prize in Physics',
//             'Nobel Prize in Chemistry',
//             'Davy Medal',
//             'Matteucci Medal'
//           ]}
//         />
//    </div>
//   );
// }

// function Card({ children }) {
//     return (
//       <div className="card">
//         <div className="card-content">
//           {children}
//         </div>
//       </div>
//     );
//   }

//   export default function Profile() {
//     return (
//       <div>
//         <Card>
//           <h1>Photo</h1>
//           <img
//             className="avatar"
//             src="https://i.imgur.com/OKS67lhm.jpg"
//             alt="Aklilu Lemma"
//             width={100}
//             height={100}
//           />
//         </Card>
//         <Card>
//           <h1>About</h1>
//           <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
//         </Card>
//       </div>
//     );
//   }
  

// import React from 'react';

// function App() {
//   const greeting = 'Hello Function Component!';

//   return <Headline value={greeting} />;
// }

// function Headline(props) {
//   return <h1>{props.value}</h1>;
// }

// export default App;

import React, { useState } from 'react';

const App = () => {
  return <Headline />;
};

const Headline = () => {
  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );

  return (
    <div>
      <h1>{greeting}</h1>

      <input
        type="text"
        value={greeting}
        onChange={event => setGreeting(event.target.value)}
      />
    </div>
  );
};

export default App;