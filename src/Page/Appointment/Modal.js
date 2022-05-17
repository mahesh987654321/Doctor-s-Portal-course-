import React from "react";
import Appointment from "./Appointment";
import { format } from "date-fns";
import auth from "../firebaseInit";
import { useAuthState } from "react-firebase-hooks/auth";
const Modal = ({ treatment, selected, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const handelForm = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    // const phone = event.target.phone.value;
    setTreatment(null);
    const formatDate = format(selected, "PP");
    console.log(formatDate);
    const booking = {
      treatmentId: _id,
      treatment: name,
      selected: formatDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };
    fetch(`http://localhost:5000/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((pro) => {
        if (pro.success) {
          alert(`AppointmentLetter${formatDate} at ${slots}`);
        } else {
          alert(
            `Already have and appointment on ${pro.booking?.date} at ${pro.booking?.slot}`
          );
        }
        setTreatment(null);
      });
  };
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Name is: {name}</h3>
          <p className="py-4">
            <form
              onSubmit={handelForm}
              className="grid gap-5 justify-items-center"
            >
              <input
                type="text"
                readOnly
                value={format(selected, "PP")}
                disabled
                className="input input-bordered input-secondary w-full  max-w-xs"
              />
              <select
                name="slot"
                className="select select-bordered w-full max-w-xs"
              >
                {slots.map((slot) => (
                  <option value={slot}>{slot}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                disabled
                value={user?.displayName || ""}
                className="input input-bordered input-secondary w-full max-w-xs"
              />
              <input
                type="email"
                placeholder="Type Email"
                value={user?.email || ""}
                disabled
                className="input input-bordered input-secondary w-full max-w-xs"
              />
              <input
                type="number"
                name="phone"
                placeholder="Type number"
                className="input input-bordered input-secondary w-full max-w-xs"
              />
              <input
                type="submit"
                value="submit"
                className="btn btn-secondary w-full max-w-xs"
              />
            </form>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
