import React from 'react';

const BookNow = (props) =>
{
    const { cart } = props;
    const { name } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const service of cart) {
        if (!service.quantity) {
            service.quantity = 1;
        }
        total = total + service.cost * service.quantity;
        totalQuantity = totalQuantity + service.quantity;
    }

    return (

        <div className="bg-secondary py-5">
            <h3>Booking Summary {name}</h3>
            <h5>Booking: {totalQuantity}</h5>
            <br />
            <p>Total: {total.toFixed(2)}</p>
            {/* <p>Booking: {booking}</p> */}
            {/* <p>Grand Total: {grandTotal.toFixed(2)}</p> */}
            {props.children}
        </div>
    );

};

export default BookNow;
