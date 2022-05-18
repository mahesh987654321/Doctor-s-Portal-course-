import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../Spinner/Spinner";
import DoctorsRow from "./DoctorsRow";

const ManageDoctors = () => {
  const { data: doctors, isLoading,refetch } = useQuery("doctors", () =>
    fetch(`http://localhost:5000/doctors`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <div class="overflow-x-auto">
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Images</th>
                <th>Index</th>
                <th>Name</th>
                <th className="pl-14">Email</th>
                <th>Special</th>
                <th>Remove</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {doctors?.map((doctor, index) => (
                <DoctorsRow
                  key={doctor._id}
                  index={index}
                  doctor={doctor}
                  refetch={refetch}
                ></DoctorsRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageDoctors;
