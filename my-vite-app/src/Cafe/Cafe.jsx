import './cafe.css'
import Card from '../Cafe/Card.jsx';
import data from './data.jsx';


// function Ncard(val){
//     return(
//         <Card imgsrc={val.imgsrc}
//             name={val.name}
//             amount={val.amount}
//             rating={val.rating}
//         />
//     )
// }

function Cafe(){

    return(
        <>
            <div className='container'>
                <img src="./public/bg-cafe.jpg" alt="cafe" />
                <div className='box'>
                    <div className='heading'>
                        <h1>Our Collection</h1>
                        <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                        <div className='btns'>
                            <button>All Products</button>
                            <button>Available Now</button>
                        </div>
                    </div>
                    <div className='cards'>

        {/* <Card imgsrc={data[0].imgsrc}
            name={data[0].name}
            amount={data[0].amount}
            rating={data[0].rating}
        /> */}
            {data.map((val)=>{
                return(
                    <Card imgsrc={val.imgsrc}
                        name={val.name}
                        amount={val.amount}
                        rating={val.rating}
                        />
                )
            })}
        
        </div>
        </div>
    </div>
    </>
    )
}

export default Cafe