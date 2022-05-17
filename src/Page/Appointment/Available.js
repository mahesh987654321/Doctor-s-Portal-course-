import React, { useEffect, useState } from "react";
import AvailableDetails from "./AvailableDetails";
import { format } from "date-fns";
import Modal from "./Modal";
import { useQuery } from "react-query";
import Spinner from "../../Spinner/Spinner";
const Available = ({ selected }) => {
  console.log(selected);
  const [service, setService] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(selected, "PP");
  console.log(formattedDate);
  //   const { selected: service, isLoading } = useQuery("available", () =>
  //     fetch(`http://localhost:5000/available?selected=${formattedDate}`).then(
  //       (res) => res.json()
  //     )
  //   );
  // console.log(service);
  //   if (isLoading) {
  //     return <Spinner></Spinner>;
  //   }
  useEffect(() => {
    // fetch(`http://localhost:5000/service`)
    fetch(`http://localhost:5000/available?selected=${formattedDate}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [formattedDate]);
  return (
    <div>
      <p className="text-center text-zinc-900 text-lg">
        You picked {format(selected, "PP")}
      </p>
      ;
      <div className="grid grid-cols-3 gap-10">
        {service?.map((product) => (
          // console.log(product)
          <AvailableDetails
            product={product}
            setTreatment={setTreatment}
            key={service._id}
          ></AvailableDetails>
        ))}
      </div>
      {treatment && (
        <Modal
          selected={selected}
          treatment={treatment}
          setTreatment={setTreatment}
        ></Modal>
      )}
    </div>
  );
};

export default Available;
