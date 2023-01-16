import React, { useCallback, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const UserContext = React.createContext({});

export const useUser = () => React.useContext(UserContext);

const useProvideUser = () => {
  const [user, setUser] = React.useState(null);

  const reload = useCallback(() => {
    axios
      .get("/me")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    reload();
  }, []);

  const login = (user) => {
    setUser(user);
  };

  const handleRegLogout = () => {
    fetch("https://recipe-be.onrender.com/logout", { method: "DELETE" }).then(
      (r) => {
        if (r.ok) {
          toast.success("Logout Successful");
        }
      }
    );
  };

  const logout = () => {
    handleRegLogout();
    setUser(null);
  };

  return {
    user,
    login,
    logout,
  };
};

const UserProvider = ({ children }) => {
  const user = useProvideUser();
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
