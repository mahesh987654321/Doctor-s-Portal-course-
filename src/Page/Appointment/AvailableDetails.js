import React from "react";

const AvailableDetails = ({ product, selected, setTreatment }) => {
  const { name, slots } = product;

  return (
    <div>
      <div className="lg:max-w-lg">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{name}</h2>

            <p>
              {slots.length > 0 ? (
                <span>{slots[0]}</span>
              ) : (
                <span className="text-red-600">No data available</span>
              )}
            </p>
            <p>
              {slots.length} {slots.length > 1 ? "spaces" : "space"} is
              Available{" "}
            </p>

            <div className="card-actions justify-end">
              <label
                htmlFor="booking-modal"
                className="btn modal-button btn btn-primary"
                onClick={() => setTreatment(product)}
                disabled={slots.length < 1}
              >
                Book Appointment
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableDetails;
