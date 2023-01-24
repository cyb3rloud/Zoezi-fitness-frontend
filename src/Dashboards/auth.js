import React, { useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const UserContext = React.createContext({});

export const useUser = () => React.useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const reload = useCallback(() => {
    fetch('/api/me')
      .then((response) => {
        if (!response.ok) return
        response.json().then(data => setUser(data))
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
    fetch('/api/logout', { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        toast.success('Logout Successful');
      }
    });
  };

  const logout = () => {
    handleRegLogout();
    setUser(null);
  };

  return <UserContext.Provider value={(user, login, logout)}>{children}</UserContext.Provider>;
};

export default UserProvider;
