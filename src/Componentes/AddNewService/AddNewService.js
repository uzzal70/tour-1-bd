import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewService = () =>
{
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>
    {
        console.log(data);
        axios.post('https://powerful-wildwood-02565.herokuapp.com/packages', data)
            .then(res =>
            {
                if (res.data) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <div className="col-xs-12 col-sm-7 pt-5 pb-2 bg-secondary form-border">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="w-100 my-1 p-2 rounded" {...register("img")} placeholder="Image url" />
                    <input className="w-100 my-1 p-2 rounded" {...register("name", { required: true, })} placeholder="Package Name" />
                    <input className="w-100 my-1 p-2 rounded" {...register("days", { required: true, })} placeholder="Days" />
                    <textarea className="w-100 p-2 rounded" {...register("description")} placeholder="Description" />

                    <input className="w-100 my-1 p-2 rounded" {...register("location", { required: true, })} placeholder="Location" />
                    <input type="number" className="w-100 my-1 p-2 rounded" {...register("number", { required: true, })} />
                    <input className="btn btn-outline-warning my-2 fw-bold rounded-pill px-5" type="submit" value="Submit" />

                </form>
            </div>
        </div>
    );
};

export default AddNewService;