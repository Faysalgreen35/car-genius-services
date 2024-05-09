

const BookingsRow = ({ booking, handleDelete, handleBookingConfirm }) => {



    const { _id, date, service, img, price, status } = booking;
    return (
        <div className="w-full">
            {/* row 1 */}
            <tr className="w-full">
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>

                    <div className="avatar">
                        <div className=" rounded w-24 h-24">
                            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>


                </td>
                <td>
                    {service}
                </td>
                <td>{date}</td>
                <td>${price}</td>
                <th>
                    {
                        status === 'confirm' ? <span className="font-bold text-primary"> Confirmed</span> :
                            <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please  Confirm</button>}
                </th>
            </tr>
        </div>
    );
};

export default BookingsRow;