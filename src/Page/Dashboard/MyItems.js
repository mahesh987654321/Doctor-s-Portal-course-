import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebaseInit";
const MyItems = () => {
  const [appoinment, setAppionment] = useState([]);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("token");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setAppionment(data);
        });
    }
  }, [user]);

  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Treatment</th>
          </tr>
        </thead>
        <tbody>
          {appoinment.map((a, index) => (
            <tr>
              <th>{1 + index}</th>
              <td>{a.patient}</td>
              <td>{a.selected}</td>
              <td>{a.slot}</td>
              <td>{a.treatment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyItems;
