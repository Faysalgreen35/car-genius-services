import { Link } from "react-router-dom";

 

const ServiceCard = ({service}) => {

    const {_id, title, price, img}= service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl text-left">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title text-3xl">{title}</h2>
                <p className="text-2xl text-orange-500 ">Price: <span>$</span>{price}</p>
                 
                <div className="card-actions">
                    <Link to={`/book/${_id}`}><button className="btn btn-secondary">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;