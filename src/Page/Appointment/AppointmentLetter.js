import React from "react";
import chair from "../../assets/images/chair.png";

import { DayPicker } from "react-day-picker";
const AppointmentLetter = ({ selected, setSelected }) => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentLetter;
