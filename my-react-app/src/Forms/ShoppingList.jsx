import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
export default function ShoppingList(){
    const [item,setitem]=useState([
        {id:1,product:'apple',quantity:2}
    ])
    const additem=(item)=>{
        setitem(curitem=>{
            return[...curitem,{...item,id:9}]
        })
    }

    return(
        <div>
            <h1>shopping list</h1>
            <ul>
                {item.map((i)=>(
                    <li key={i.id}>
                    {i.product}-{i.quantity}
                    </li>
                ))}
            </ul>
            <ShoppingListForm additem={additem}/>
        </div>
    )
}