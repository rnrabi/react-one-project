import React from 'react';

const Card = (props) => {
    console.log(props.data)
    const { id, name, price, img, seller, ratings } = props.data
    return (
        <div>
            <div className="card card-compact w-11/12 bg-base-100 shadow-xl">
                <figure><img className='w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price : $ {price}</p>
                    <p>menufacturer : {seller}</p>
                    <p>Ratings : {ratings}</p>
                    <div className="card-actions w-full">
                        <button className="btn btn-primary w-full">Buy Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;