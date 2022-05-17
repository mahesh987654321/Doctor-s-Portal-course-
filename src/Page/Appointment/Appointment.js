import React, { useState } from "react";
import Footer from "../Home/Footer";
import AppointmentLetter from "./AppointmentLetter";
import Available from "./Available";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <div>
      <AppointmentLetter
        selected={selected}
        setSelected={setSelected}
      ></AppointmentLetter>
      <Available selected={selected} />
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
