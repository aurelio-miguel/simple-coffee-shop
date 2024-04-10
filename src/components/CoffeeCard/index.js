import './CoffeeCard.css';

const CoffeeCard = (props) => {

    const score = props.score;

    return (
        <div className="coffee-card">
            <div className="coffee-card-image" style={{ backgroundImage: `url(${props.image})` }}  >
                {props.tag != null ? <span className="coffee-card-tag">{props.tag}</span> : <span></span>}
            </div>
            <div className="coffee-card-info">
                <div className="coffee-card-info-head">
                    <p className="coffee-card-info-head-name">{props.name}</p>
                    <p className="coffee-card-info-head-price">$ {props.price}</p>
                </div>
                <div className="coffee-card-feedback">
                    <div className='coffee-card-feedback-numbers'>
                        {score == 0 ? <img src="/Star.png"></img> : <img src='/Star_fill.png' />}
                        {score == 0 ? <></> : <p className="coffee-card-feedback-score">{props.score}</p>}
                        {score == 0 ? <p className="coffee-card-feedback-votes">No ratings</p> : <p className="coffee-card-feedback-votes">({props.qtdVotes} votes)</p>}
                    </div>
                    {props.available ? <p></p> : <p className="coffee-card-feedback-soldout">Sold out</p>}
                </div>
            </div>
        </div >
    );
}

export default CoffeeCard;