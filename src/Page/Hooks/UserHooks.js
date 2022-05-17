import { useState, useEffect } from "react";

const UserHooks = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const token = data.token;

          localStorage.setItem("token", token);
          setToken(token);
        });
    }
  }, [user]);
  return [token];
};
export default UserHooks;
