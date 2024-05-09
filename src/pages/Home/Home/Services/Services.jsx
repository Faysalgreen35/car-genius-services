import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {


    const [services, setServices] = useState([]);

    useEffect(()=>  {

        fetch('https://car-genius-server-omega.vercel.app/services')
        .then(res => res.json())
        .then(data =>{
            setServices(data);
        })
    }, [])

    return (
        <div className="mt-4">
          <div className="text-center ">
          <h3 className="text-2xl font-bold text-orange-500">
                Service
            </h3>
           
            <h2 className="text-5xl"> Our Service Area

            </h2>
            <p>
                The majority have suffered alteration in some form, by injected humour, or randomised
                <br /> words which donot look even slightly believable.
                 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5  ">
            {
                services.map(service => <ServiceCard
                key={service.id}
                service= {service}
                ></ServiceCard>)
            }
          </div>
        </div>
    );
};

export default Services;