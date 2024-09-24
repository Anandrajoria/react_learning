import React from "react";

function getImageUrl(person) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }


const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];


function List(){
    const chemists = people.filter(person =>
        person.profession === 'chemist'
      );
      const listItems = chemists.map(person =>
        <li key={person.id}>
           <img
             src={getImageUrl(person)}
             alt={person.name}
           />
           <p>
             <b>{person.name}:</b>
             {' ' + person.profession + ' '}
             known for {person.accomplishment}
           </p>
        </li>
      );
      
      
    return(
        <>
            <ul>{listItems}</ul>;
        </>
    )
}

export default List