import React from 'react'
import './slotMachine.css'

const Slotm=(props)=>{
    // let x='😊';
    // let y='😊';
    // let z='😊';


    let [x,y,z]=[props.x,props.y,props.z]
    

    if(props.x===props.y && props.x===props.z){
        return (
            <>
                <div className='slot_inner'>
                    <h1>{x}  {y}  {z}</h1>
                    <h1>this is maching</h1>
                    
                </div>
            </>
        )
    }else{
        return(
            <>
                <div className='slot_inner'>
                    <h1>{x}  {y}  {z}</h1>
                    <h1>this is not maching</h1>
                    
                </div>
            </>
        )
    }
}
const SlotMachine=()=>{
    return(   
        <>
            <h1 className='heading'>🏁 welcome to <span style={{fontWeight:'800'}}>slot machine game</span>🏁</h1>
            <div className='slotMachine'>
            <Slotm x='😉' y='😉'  z='😉'/>
            <Slotm x='😉' y='🤔'  z='😉'/>
            <Slotm x='😉' y='😉'  z='😁'/>
            
            </div>
            
        </>
    )
}

export default SlotMachine
