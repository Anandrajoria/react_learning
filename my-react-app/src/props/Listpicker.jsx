import './greeter.css'
export default function Listpicker({value}){
    let idx=Math.floor(Math.random()*value.length);
    let ele=value[idx] 
    return (
        <div>
            <p>the list of values:{value}</p>
            <p>random element is:{idx} </p>
        </div>
    )
}
