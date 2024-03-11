import './Champ.css'

const Champ = (props) => {
    return (
        <div className="champ">
            <div className="header">   
                <img src={props.image} alt={props.name}></img>
            </div>
            <div className="footer">
                    <h4>{props.name}</h4>  
                    <h5>{props.championClass}</h5>
                    <h5>{props.rangeType}</h5>
            </div>
        </div>
    )
}

export default Champ