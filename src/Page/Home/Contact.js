import React from "react";
import appointment from "../../assets/images/appointment.png";
const Contact = () => {
  return (
    <div
      style={{ background: `url(${appointment})` }}
      className="mx-auto bg-cover grid justify-center mt-16 mb-14"
    >
      <div>
        <div className="text-center">
          <p style={{ color: "#19D3AE" }}>Contact Us</p>
          <p className="text-2xl text-slate-50">Stay connected with us</p>
        </div>
        <input
          style={{ width: "30rem" }}
          type="text"
          placeholder="Email Address"
          className="input input-bordered input-error "
        />
        <br />
        <input
          style={{ width: "30rem" }}
          type="text"
          placeholder="Subject"
          className="input mt-5 input-bordered input-error  "
        />{" "}
        <br />
        <textarea
          style={{ width: "30rem" }}
          className="textarea mt-5 textarea-error"
          placeholder="Bio"
        ></textarea>
      </div>
      <div className="mx-auto mt-10">
        <button className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
