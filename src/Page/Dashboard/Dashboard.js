import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebaseInit";
import UserAdmin from "../Hooks/UserAdmin";
// import { UseAuthState } from "react-firebase-hooks/auth";
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = UserAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <h2>Dashboard</h2>
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">Appointment</Link>
          </li>
          <li>
            <Link to="review">My Reviews</Link>
          </li>
          <li>
            <Link to="history">History</Link>
          </li>
          <li>
            <Link to="addDoctor">History</Link>
          </li>
          <li>
            {admin && (
              <>
                <Link to="users">All items</Link>
                <Link to="addDoctor">Add Doctor</Link>
                <Link to="manageDoctors">Manage Doctor's</Link>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
