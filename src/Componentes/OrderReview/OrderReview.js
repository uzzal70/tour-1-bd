import React from 'react';
import usePackage from '../../Hooks/usePackage';
import useCart from '../../Hooks/useCart';
import ReviewBook from '../ReviewBooking/ReviewBook';
import BookNow from '../Booking/BookNow';
import { useHistory } from 'react-router-dom';
import { removeFromDb } from '../utilitis/fakedb';

const OrderReview = () =>
{
    const [packages] = usePackage();
    const [cart, setCart] = useCart(packages);
    const history = useHistory();

    const handleRemove = key =>
    {
        const newCart = cart.filter(service => service.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handleProceedToBooking = () =>
    {
        // setCart([]);
        // clearTheCart();
        history.push('/booking');
    }
    return (
        <div className="row Package-container container pt-5">
            <div className="w-75 Booking-container ">
                <h1>This is Your Booking </h1>
                {
                    packages.map(service => <ReviewBook
                        key={service.key}
                        service={service}
                        handleRemove={handleRemove}
                    ></ReviewBook>)
                }
            </div>
            <div className="w-25 cart-container">
                <BookNow cart={cart}>
                    <button onClick={handleProceedToBooking} className="btn-regular">Proceed to Booking</button>
                </BookNow>
            </div>
        </div>
    );
};

export default OrderReview;