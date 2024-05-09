import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

 

const BookService = () => {

    const {user} = useContext(AuthContext)

    const service = useLoaderData();

    const { title, _id, price, img  } = service;

    const handleBookservice = (event) =>{
        event.preventDefault();

        const form =event.target;
        const name =form.name.value;
        const date =form.date.value;
        const email =user?.email;
        console.log(name,email,date)

        const booking = {
            customerName : name,
            img,
            email,
            date,
            service: title,
            service_id:_id,
            price,

        }
        console.log(booking);

        fetch('https://car-genius-server-omega.vercel.app/bookings', {
            method:'POST',
            headers:{
                'content-type': 'application/json'

            },
            body:JSON.stringify(booking)

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                alert('service book successfully')
            }
        })

    }

    return (
        <div>
            <h1>Book service:  { title}</h1>

            <div className="   bg-base-200">
            <div className="   w-full   ">
                
                <div className="  text-center w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleBookservice} className="card-body">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name"  defaultValue={user?.displayName} name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" placeholder="password" name="date" className="input input-bordered" required />
                            
                        </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" defaultValue={'$' + price} placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        </div>
                     
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Order confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BookService;