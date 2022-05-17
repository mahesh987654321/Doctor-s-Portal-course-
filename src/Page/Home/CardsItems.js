import React from "react";
import CardItemsDetails from "./CardItemsDetails";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
const CardsItems = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <CardItemsDetails
        img={clock}
        cardTitle="For clock"
        cardDescription="This is time"
        bgclassName="bg-gradient-to-r from-secondary to-primary"
      ></CardItemsDetails>
      <CardItemsDetails
        img={marker}
        cardTitle="For Marker"
        cardDescription="This is Marker"
        bgclassName="bg-accent"
      ></CardItemsDetails>
      <CardItemsDetails
        img={phone}
        cardTitle="For Phone"
        cardDescription="This is Phone"
        bgclassName="bg-gradient-to-r from-secondary to-primary"
      ></CardItemsDetails>
    </div>
  );
};

export default CardsItems;
