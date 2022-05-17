import React from "react";
import appointment from "../../assets/images/appointment.png";
import doctorSmall from "../../assets/images/doctor-small.png";
const Doctor = () => {
  return (
    <div style={{ background: ` url(${appointment})` }} className="hero  mt-24">
      <div className="hero-content flex-col lg:flex-row">
        <img className="mt-[-100px]" src={doctorSmall} className="" />
        <div>
          <p style={{ color: "#19D3AE" }}>Appointment</p>
          <h1 className="text-5xl font-bold text-slate-100">
            Make an appointment Today
          </h1>
          <p className="py-6 text-gray-50">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
