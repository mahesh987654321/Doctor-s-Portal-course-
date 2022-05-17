import React from "react";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
import ServiceDetails from "./ServiceDetails";
const Services = () => {
  const fakedata = [
    {
      _id: 1,
      image: cavity,
      title: "Fresh Treatment",
      Details: "This is for treatment",
    },
    {
      _id: 2,
      image: fluoride,
      title: "Cavity Feeling",
      Details: "This is for treatment",
    },
    {
      _id: 2,
      image: whitening,
      title: "Teeth Whitining",
      Details: "This is for treatment",
    },
  ];
  return (
    <div>
      <div className="text-center">
        <h3 className="text-2xl" style={{ color: "#19D3AE" }}>
          Our services
        </h3>
        <h1 className="text-4xl">Service we provide</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {fakedata.map((product) => (
          <ServiceDetails product={product} key={product._id}></ServiceDetails>
        ))}
      </div>
    </div>
  );
};

export default Services;
