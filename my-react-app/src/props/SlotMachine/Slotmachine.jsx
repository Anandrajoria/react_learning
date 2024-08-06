import './slot.css'
export default function SlotMachine({val1,val2,val3}){
    let isWinner=val1==val2 && val1==val3;
    return(
        <>
            <div>
            <h1>{val1}{val2}{val3}</h1>
                <h2 style={{color:isWinner?'green':'red'}}>{isWinner?"you win":'you loose'}</h2>
                <h3>{isWinner?'congrats':null}</h3>
            </div>
        </>
    )
}