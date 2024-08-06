import './greeter.css'
import Die from './Die'
export default function Greeter({name,from}){
    // console.log(props);
    
    return (
        <>
        <h1>hii their, {name} </h1>
        <h2>-{from}</h2>
        <Die numside={20}/>
        <Die/>
        <Die numside={43}/>
        </>
    )
}