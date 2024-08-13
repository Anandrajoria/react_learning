// import { useState } from "react"

// export default function SignupForm(){
//     const[firstName,setFirstName]=useState('')
//     const[lastName,setLastName]=useState('')

//     let updateFirstName=(e)=>{
//         setFirstName(e.target.value)
//     }
//     let updatelastName=(e)=>{
//         setLastName(e.target.value)
//     }

//     let handleSubmit=()=>{
//         console.log(firstName,lastName);
        
//     }

//     return (
//         <>
//             <div>
//             <label htmlFor="firstName">enter firstName</label>
//                 <input 
//                     type="text" 
//                     placeholder="firstName" 
//                     value={firstName}
//                     onChange={updateFirstName}
//                     id="firstName"
//                 />

//             <label htmlFor="lastName">enter lastName</label>
//                 <input 
//                     type="text" 
//                     placeholder="lastName" 
//                     value={lastName}
//                     onChange={updatelastName}
//                     id="lastName"
//                 />

//                 <button onChange={handleSubmit}>submit</button>
//             </div>
//         </>
//     )
// }

import { useState } from "react"

export default function SignupForm(){
    const[formData,setFormData]=useState({firstName:'',lastName:''})
    
    const handleChange=(e)=>{
        // let changedField=e.target.name;
        // let newval=e.target.value;
        
        setFormData(curData=>{
            // curData[changedField]=newval
            // return {...curData}
            return{
                ...curData,
                // [changedField]:newval
                [e.target.name]:e.target.value

            }
        })
        
    }
    let handleSubmit=()=>{
        console.log(formData);
    }

    return (
        <>
            <div>
            <label htmlFor="firstName">enter firstName</label>
                <input 
                    type="text" 
                    placeholder="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    id="firstName"
                    name="firstName"
                />

            <label htmlFor="lastName">enter lastName</label>
                <input 
                    type="text" 
                    placeholder="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    id="lastName"
                    name="lastName"
                />

                <button onClick={handleSubmit}>submit</button>
            </div>
        </>
    )
}

