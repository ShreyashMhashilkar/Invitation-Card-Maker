import CardTemplate from "./CardTemplate";

const Display=(props)=>{
    const {details,available}=props
    return(
        <>
        <div>
        {
            available?<CardTemplate details={details}/>:''
        }
        </div>
        </>
    )
}

export default Display;