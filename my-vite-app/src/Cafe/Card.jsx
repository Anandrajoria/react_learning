import './cafe.css'

function Card(props){
    return(
        <>
        
    <div className='card'>
        <div className='card-image'>
            <img src={props.imgsrc} alt="cappuccino" />
        </div>

        <div className='cardd'>
            <div className='card-content'>
                {/* <h2>Cappuccino</h2> */}
                <h2>{props.name}</h2>

                <button>{props.amount}</button>
            </div>
            <div className='card-rate'>
                <p>
                    <img src="./public/star_fill.svg" alt="star" />
                    <span>{props.rating}</span>
                    <span>(65vots)</span>
                </p>
            </div>
        
        </div>
    </div>
                
                    </>
    )
}

export default Card