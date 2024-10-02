
// import React, { useState } from 'react'

// function Form() {
//     let [name1,setname]=useState();
    // let [firstName,setFirstName]=useState();

    // let [name2,setname2]=useState();
    // let [lastName,setLastName]=useState();

    // let [pass,setpass]=useState();
    // let [password,setpassword]=useState()

//     function inputEvent(event){
//         console.log(event.target.value);
//         setname(event.target.value)
//     }

    // function inputEvent3(e){
    //     setpass(e.target.value)
    // }
//     function onsubmit(e){
//         e.preventDefault();
        // setFirstName(name1)
        // setLastName(name2)
        // setpassword(pass)
//     }


//     return (
//     <>
//         <form onSubmit={onsubmit}>
//             <div>
//                 <h1>hello {firstName} {lastName}</h1>
                
//                 <input type="text" placeholder='Enter your firstName'
//                     onChange={inputEvent}
//                     value={name1}
//                 />
//                 <input type="text" placeholder='Enter your lastName'
//                     onChange={inputEvent}
//                     value={name2}
//                 />

//             {/* <input type="password" placeholder='enter your password'  
//                 onChange={inputEvent3}
//                 value={password}
//             /> */}

                
//                 <button>submit</button>
//             </div>
//         </form>
//     </>
//     )
// }

// export default Form



import React, { useState } from 'react'

function Form() {
    let [fullname,setfullname]=useState({
        fname:'',
        lname:'',
        email:'',
        no: ''
    });

    function inputEvent(event){
        // const value=event.target.value
        // const name= event.target.name

        const{value,name}=event.target;

        setfullname((preValue)=>{
            // if(name==='fname'){
            //     return{
            //     fname:value,
            //     lname:preValue.lname,
            //     email:preValue.email,
            //     no:preValue.no
            //     }
            // }else  if(name==='lname'){
            //     return{
            //     fname:preValue.fname,
            //     lname:value,
            //     email:preValue.email,
            //     no:preValue.no
            //     }
            // }else  if(name==='email'){
            //     return{
            //     fname:preValue.fname,
            //     lname:preValue.lname,
            //     email:value,
            //     no:preValue.no
            //     }
            // }else  if(name==='no'){
            //     return{
            //     fname:preValue.fname,
            //     lname:preValue.lname,
            //     email:preValue.email,
            //     no:value
            //     }
            // }

            return{
                ...preValue,
                [name]:value
            }
        })

    }


    function onsubmit(e){
        e.preventDefault();
        alert("your data has been saved")
    }


    return (
    <>
        <form onSubmit={onsubmit}>
            <div>
                <h1>hello {fullname.fname} {fullname.lname}</h1>
                <h2>{fullname.email}</h2>
                <h2>{fullname.no}</h2>
                <input type="text" placeholder='Enter your firstName'
                    name='fname'
                    onChange={inputEvent}
                    value={fullname.fname}
                />
                <input 
                    type="text" 
                    placeholder='Enter your lastName'
                    name='lname'
                    onChange={inputEvent}
                    value={fullname.lname}
                />
                <input 
                    type="email" 
                    placeholder='Enter your email'
                    name='email'
                    onChange={inputEvent}
                    value={fullname.email}
                />
                <input 
                    type="number" 
                    placeholder='Enter your number'
                    name='no'
                    onChange={inputEvent}
                    value={fullname.no}
                />
                <button>submit</button>
            </div>
        </form>
    </>
    )
}

export default Form
