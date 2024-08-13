import { useState } from "react";

export default function ShoppingListForm({additem}){
    const [formdata,setformdata]=useState({product:'',quantity:0})

    let handlechange=(e)=>{
        setformdata(curdata=>{
            return{
                ...curdata,
                [e.target.name]:e.target.value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log('submit');
        additem(formdata)
    }

    return(
        <form onSubmit={handleSubmit}>
        <h1>product is: {formdata.product} and quantity is: {formdata.quantity}</h1>
        <label htmlFor="product">product name</label>
            <input 
                type="text"     
                name="product"     
                id="product"
                placeholder="product name"
                onChange={handlechange}
                value={formdata.product}
                />

            <label htmlFor="quantity">quantity</label>
            <input 
                type="number"     
                name="quantity"     
                id="quantity"
                placeholder="1"
                onChange={handlechange}
                value={formdata.quantity}
                />
                <button>add item</button>
        </form>
    )
}