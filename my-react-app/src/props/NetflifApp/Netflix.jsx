import Card from "./Card"
import Sdata from "./Sdata"

function Index(){
    return(
        <>
        <h1 className="heading_style">list of top anime character</h1>
            
        {Sdata.map((e)=>{
            return(
            <Card
                imgsrc={e.imgscr}
                title={e.title}
                sname={e.sname}
                link={e.link}
            />
    )
            })}
        </>
    )
}
export default Index