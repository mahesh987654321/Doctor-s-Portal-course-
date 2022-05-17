import React from "react";

const UserRow = ({ user, refetch }) => {
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          alert("Failed to make admin");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data ...........", data);
        if (data.modifiedCount > 0) {
          refetch();
          console.log(data);
          alert(`update Successful`);
        }
      });
  };
  const { email, role } = user;
  console.log(role);
  return (
    <div>
      <tr>
        <th>1</th>
        <td>{email}</td>
        <td>
          {role !== "admin" && (
            <button onClick={makeAdmin} class="btn btn-success btn-xs">
              Make Admin
            </button>
          )}
        </td>
        <td>
          <button class="btn btn-xs bg-red-600 border-t-orange-800">
            Remove Admin
          </button>
        </td>
      </tr>
    </div>
  );
};

export default UserRow;
