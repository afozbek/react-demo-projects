import React from 'react';

const PriceCard = (props) => {
    const value = typeof parseInt(props.value) === 'number' && !isNaN(parseInt(props.value)) ? Math.round(parseInt(props.value)) : props.value;
    return (
        <div className="card mr-0 custom-card">
            <div className="card-body">
                < img src={props.src} alt={props.src} className="img-responsive float-right" />
                <h6 className="card-title mb-4 ">{props.header} </h6>

                <h2 className="mb-1 text-primary">${value}</h2>
                <p className="card-text"><small className="text-muted">{props.label}</small></p>
            </div>
        </div>
    )
};

export default PriceCard;