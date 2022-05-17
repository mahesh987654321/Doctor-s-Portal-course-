import React from "react";

const CardItemsDetails = ({ img, cardTitle, cardDescription, bgClass }) => {
  return (
    <div
      class={`card card-compact grid grid-cols-2 justify-around  w-96 bg-base-100 shadow-xl ${bgClass}`}
    >
      <figure className="">
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardDescription}</p>
      </div>
    </div>
  );
};

export default CardItemsDetails;
