
function ShoppingListItem({item,quantity,completed}){
    let style={color:completed?'grey':'red'}

    return <li style={style}>{item}-{quantity}</li>
}

export default ShoppingListItem

{/* <li key={i.id} 
            style={{color:i.completed?'grey':'red'}}>
            
                    {i.item}-{i.quantity}
            </li> */}