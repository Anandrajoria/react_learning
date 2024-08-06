import './poke.css'

function Pokemon(){
    var number=Math.floor(Math.random()*151)+1
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`;

    return (
        <div className="poke">
            <h1>pokemon #{number}</h1>
            <img src={imageUrl} className="image"/>
        </div>
    )
}
export default Pokemon