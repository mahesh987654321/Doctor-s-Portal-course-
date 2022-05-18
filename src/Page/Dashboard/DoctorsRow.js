import React from "react";

const DoctorsRow = ({ doctor, index, refetch }) => {
  const { email, name, img, special } = doctor;

  const habdelDelete = (email) => {
    console.log(email);
    fetch(`http://localhost:5000/doctors/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert(`Doctor's ${name} is deleted`);
          refetch();
        }
      });
  };

  return (
    <tr>
      <th></th>
      <td class="avatar w-24 rounded-full">
        <img src={img} />
      </td>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{special}</td>
      <td>
        <button
          onClick={() => habdelDelete(email)}
          class="btn btn-xs bg-red-600 text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DoctorsRow;
