import React from 'react';
import { useParams } from 'react-router-dom';

const Myorder = (props) =>
{
    const { name, email } = props.order;
    const { packagedetailsId } = useParams();
    return (
        <div row>
            <h3 className="text-black text-start ps-2" >{packagedetailsId}</h3>
            <h4 className="text-black text-start ps-2">{name}</h4>
            <h4 className="text-black text-start ps-2">{email}</h4>
        </div>
    );
};

export default Myorder;