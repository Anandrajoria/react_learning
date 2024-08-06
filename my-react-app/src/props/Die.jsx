export default function Die({numside=15}){
    const roll=Math.floor(Math.random()*numside)+1
    return <p>die roll: {roll}</p>
}