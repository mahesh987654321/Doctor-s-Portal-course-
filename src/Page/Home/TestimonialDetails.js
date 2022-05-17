import React from "react";

const TestimonialDetails = ({ product }) => {
  const { _id, details, image, place, name } = product;
  return (
    <div>
      <div className="card w-96 shadow-xl">
        <p>{details}</p>

        <div className="flex">
          <div>
            <img className="w-16" src={image} alt="Shoes" />
          </div>
          <div className="ml-8">
            <h2 className="card-title">{place}</h2>
            <h2 className="card-title">{name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetails;
