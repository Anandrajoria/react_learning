import * as operaiton from './Properties'


export default function Main(){
    return(
        <>
            <ul>
                <li>sum of two number {operaiton.Add(1,2)}</li>
                <li>sub of two number {operaiton.sub(1,2)}</li>
                <li>mult of two number {operaiton.mult(1,2)}</li>
                <li>div of two number {operaiton.div(4,7)}</li>
            </ul>
        </>
    )
}