

const DestinationCard=(props)=>{
    return(
        <div>
            <img src={props.image}/>
            <h2>{props.name}</h2>
            <h3>{props.location}</h3>
            <p>{props.price}</p>
            <p>{props.description}</p>
        </div>
    )

}

export default DestinationCard;