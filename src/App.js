import { Route, Routes } from "react-router-dom";
import About from "./Page/About/About";
import Appointment from "./Page/Appointment/Appointment";
import Contact from "./Page/Contact/Contact";
import AddDoctor from "./Page/Dashboard/AddDoctor";
import Dashboard from "./Page/Dashboard/Dashboard";
import History from "./Page/Dashboard/History";
import ManageDoctors from "./Page/Dashboard/ManageDoctors";
import MyItems from "./Page/Dashboard/MyItems";
import Review from "./Page/Dashboard/Review";
import Users from "./Page/Dashboard/Users";

import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import Signup from "./Page/Login/Signup";
import Navbar from "./Page/Navbar/Navbar";
import RequireAdmin from "./Page/RequireAuth/RequireAdmin";
import RequireAuth from "./Page/RequireAuth/RequireAuth";
import Reviews from "./Page/Reviews/Reviews";

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<Signup></Signup>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyItems></MyItems>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="history" element={<History></History>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageDoctors"
            element={
              <RequireAdmin>
                <ManageDoctors></ManageDoctors>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor></AddDoctor>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;

// maheshbiswas2711@gmail.com
