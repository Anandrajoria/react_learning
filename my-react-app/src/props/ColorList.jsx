export default function ColorList({color}){
    // const lis=color.map((c)=>{
    //     return <li style={{color:c}}>{color}</li>
    // })
    return (
        <div>
            <p>color list</p>
            {/* <ul>{lis}</ul> */}
        <ul>
            {color.map((c)=>{
                return <li style={{color:c}}>{c}</li>
            })}
        </ul>
        </div>
    )
}