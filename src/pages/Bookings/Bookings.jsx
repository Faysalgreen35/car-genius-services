import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingsRow from "./BookingsRow";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();

    // const url = `https://car-genius-server-omega.vercel.app/bookings?email=${user?.email}`;
    const url = `/bookings?email=${user?.email}`;

    // useEffect(() => {
    //     // axios.get(url,{withCredentials:true})
    //     // .then(res => {
    //     //     setBookings(res.data);
    //     // })

    //     // fetch(url)
    //     //     .then(res => res.json())
    //     //     .then(data => setBookings(data))

    //     axiosSecure.get(url)
    //     .then(res => setBookings(res.data))

    // }, [url, axiosSecure])

    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                if (res && res.data) {
                    setBookings(res.data);
                } else {
                    console.error("Response or data is undefined:", res);
                }
            })
            .catch(error => {
                console.error("Error fetching bookings:", error);
            });
    }, [url, axiosSecure]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`https://car-genius-server-omega.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deleteCount > 0) {
                        alert('deleted successfully');
                        const reamaining = bookings.filter(booking => booking._id !== id);
                        setBookings(reamaining);
                    }
                })
        }
    }
    const handleBookingConfirm = id => {
        
            fetch(`https://car-genius-server-omega.vercel.app/bookings/${id}`, {
                method:'PATCH',
                headers:{
                    'content-type': 'application/json'
    
                },
                body:JSON.stringify({status: 'confirm'})
    
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        alert('updated data successfully');
                        const reamaining = bookings.filter(booking => booking._id !== id);
                        const updated = bookings.find(booking => booking._id === id);
                        updated.status = 'confirm'
                        const newBookings = [updated, ...reamaining];
                        
                        setBookings(newBookings);
                    }
                })
         
    }

    return (
        // <div>
        //     <h2 className="text-5xl"> Your Bookings{bookings.length}</h2>
        //     <div className="overflow-x-auto w-full text-left ">  
        //         <table className="table w-full text-left flex justify-start">

        //             <thead className="w-full text-left mr-4">
        //                 <tr className="w-full  text-left">
                            
        //                     <th>x</th>
        //                     <th>Image</th>
        //                     <th>Service</th>
        //                     <th>Date</th>
        //                     <th>Price</th>
        //                     <th>Status</th>
        //                 </tr>
        //             </thead>
        //             <tbody className="w-full flex-1">

        //                 {
        //                     bookings.map(booking => <BookingsRow
        //                         key={booking._id}
        //                         booking={booking}
        //                         handleDelete={handleDelete}
        //                         handleBookingConfirm={handleBookingConfirm}
        //                     >

        //                     </BookingsRow>)
        //                 }

        //             </tbody>

        //         </table>
        //     </div>


        // </div>
        <div>
            <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-black text-white text-3xl">
                        <tr>
                            <th className=" ">
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingsRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingsRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;