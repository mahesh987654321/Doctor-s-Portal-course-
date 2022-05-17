import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import TestimonialDetails from "./TestimonialDetails";
const Testimonoal = () => {
  const fakedata = [
    {
      image: people1,
      _id: 1,
      place: "chaittigong",
      name: "hanry",
      details:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      image: people2,
      _id: 2,
      place: "Dhaka",
      name: "hanry",
      details:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      image: people3,
      _id: 3,
      place: "Khulna",
      name: "hanry",
      details:
        "t is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <div className="text-2xl">
            <p style={{ color: "#19D3AE" }}>Testimonial</p>
            <h2>What Our Patients Says</h2>
          </div>
          <div>
            <img className="w-48" src={quote} alt="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-center">
        {fakedata.map((product) => (
          <TestimonialDetails
            product={product}
            key={product._id}
          ></TestimonialDetails>
        ))}
      </div>
    </div>
  );
};

export default Testimonoal;
