import { useEffect, useState } from "react";

const UserAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [useLoading, setLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`http://localhost:5000/admin/${email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setLoading(false);
        });
    }
  }, [user]);
  return [admin, setLoading];
};
export default UserAdmin;
