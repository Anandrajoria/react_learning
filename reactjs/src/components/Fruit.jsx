const Fruit = ({name,price,emoji}) => {
  return <>
    {/* <li>{emoji} {name} {price}</li> */}
    <li>
      {price>28 ? <h2></h2>}
    </li>
  </>;
};

export default Fruit;
