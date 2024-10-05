import React, { useState } from 'react'
import './todo.css'

function Todo() {
    const [inputlist,setinputlist]=useState("")
    const [items,setitems]=useState([]);

    const itemEvent=(event)=>{
        setinputlist(event.target.value)
    }
    const listOfItems=()=>{
        setitems((olditms)=>{
            return[...olditms,inputlist]
        })
        setinputlist("")
    }
    const delitems=(id)=>{
        setitems((oldItems) => {
            return oldItems.filter((item, index) => {
                return index !== id;
            });
        });
    }


    return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div className='main_div'>
            <div className='center_div'>
                <br />
                <h1>Todo list</h1>
                <br />
                <input type="text" placeholder='add a item' onChange={itemEvent} value={inputlist}/>
                <button onClick={listOfItems}>+</button>

                <ol>
                    
                    {items.map((itemval,index)=>{
                        return(

                            <div className='list_style' key={index}>
                                    <i className='fa fa-times' aria-hidden='true' onClick={()=>delitems(index)} />
                                <li >{itemval}</li>
                            </div>
                            
                        )
                    })}
                </ol>
            </div>
        </div>
    </>
)
}

export default Todo
