import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Purchase = () => {
    const { id } = useParams()

    const [order, setOrder] = useState([]);
    const history = useHistory();
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    useEffect(() => {
        fetch(`https://whispering-tundra-91667.herokuapp.com/bikes/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [id])

    const onSubmit = data => {
        fetch(`https://whispering-tundra-91667.herokuapp.com/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order place Successfully');
                    reset()
                    history.push('/myOrder')
                }
            })
    };
    const img = order.img;
    return (
        <div className='container'>
            <div className="row py-5 my-5 ">
                <div className="col-lg-6 col-12 my-4 border p-4 text-center">
                    <div><img className='w-75 mb-4' src={order.img} alt="" /></div>
                    <h1>{order.title}</h1>
                </div>
                <div className="col-lg-6 col-12 my-4 border p-4">
                    <h1 className='text-center mb-4'>Give Us your Information</h1>
                    <div>
                        <form className='shipping-form text-center' onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className='col-lg-6'>
                                    <input placeholder='Name' defaultValue={user.displayName} {...register("name")} /> <br /><br />
                                    <input placeholder='Email' defaultValue={user.email} {...register("email", {})} /><br /><br />
                                    {errors.email && <span className='error'>This field is required</span>}
                                    <input placeholder='Address' defaultValue="" {...register("address")} /><br /><br />
                                    <input placeholder='City' defaultValue="" {...register("city")} /><br /><br />
                                    <input placeholder='Phone' defaultValue="" {...register("phone")} /><br /><br />
                                </div>
                                <div className='col-lg-6'>
                                    <h3>Bike Details</h3>
                                    {order.title && <div>
                                        <input defaultValue={order.title} {...register("title")} /> <br /><br />
                                        <input defaultValue={img} {...register("img")} /> <br /><br />
                                        <input defaultValue={order.description} {...register("description")} /> <br /><br />

                                    </div>}
                                </div>
                            </div>

                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;