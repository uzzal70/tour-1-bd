import React from 'react';

const ReviewBook = (props) =>
{
    const { name, cost, quantity, key } = props.service;
    const { handleRemove } = props;
    return (
        <div className="package">
            <div className="border border-2 border-dark m-2 py-3">
                <h4 className="Package-name">{name}</h4>
                <p>Package: {cost}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handleRemove(key)} className="btn-regular btn-outline-danger rounded-pill px-3">Remove</button>
            </div>
        </div>
    );
};

export default ReviewBook;