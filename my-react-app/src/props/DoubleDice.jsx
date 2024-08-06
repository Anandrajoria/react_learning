export default function DoubleDice(){
    const num1=Math.floor(Math.random()*3)+1
    const num2=Math.floor(Math.random()*3)+1
    let styles={color:num1===num2 ? 'green' : 'red'}
        return(
            <div style={styles}>
                <h2>double dics</h2>
                {num1===num2 && <h3> you win:)</h3>}
                <p>num1:{num1}</p>
                <p>num2:{num2}</p>
            </div>
        )
    }



// export default function DoubleDice(){
//     const num1=Math.floor(Math.random()*3)+1
//     const num2=Math.floor(Math.random()*3)+1

//         return(
//             <div>
//                 <h2>double dics</h2>
//                 {num1===num2?<h3>you win:)</h3>:null}
//                 <p>num1:{num1}</p>
//                 <p>num2:{num2}</p>
//             </div>
//         )
//     }



// export default function DoubleDice(){
//     const num1=Math.floor(Math.random()*3)+1
//     const num2=Math.floor(Math.random()*3)+1

//         return(
//             <div>
//                 <h2>{num1===num2?"you win":'you lose :('}</h2>
//                 <p>num1:{num1}</p>
//                 <p>num2:{num2}</p>
//             </div>
//         )
//     }


// export default function DoubleDice(){
//     const num1=Math.floor(Math.random()*3)+1
//     const num2=Math.floor(Math.random()*3)+1
//     let result=num1===num2?"you win":'you lose :(';
//     // if(num1===num2){
//     //     return(
//     //         <div>
//     //             <h2>you win</h2>
//     //             <p>num1:{num1}</p><br/>
//     //             <p>num2:{num2}</p>
//     //         </div>
//     //     )
//     // }
//     // else{
//         return(
//             <div>
//                 <h2>{result}</h2>
//                 <p>num1:{num1}</p>
//                 <p>num2:{num2}</p>
//             </div>
//         )
//     }
// // }