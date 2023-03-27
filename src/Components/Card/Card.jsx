import React from 'react';

const Card = (props) => {
    console.log(props)
    const { id, name, price, img, seller, ratings } = props.data
   
    const addToCart = props.addToCart;
  
    return (
        <div>
            <div className="card card-compact w-11/12 bg-base-100 shadow-xl">
                <figure><img className='w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price : $ {price}</p>
                    <p>menufacturer : {seller}</p>
                    <p>Ratings : {ratings}</p>

                </div>
                <div className="card-actions w-full relative">
                    <button onClick ={()=>{addToCart()}} className="btn btn-primary w-full absolute bottom-[-16px] left-0">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;