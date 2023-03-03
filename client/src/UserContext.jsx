import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userReady, setUserReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      axios
        .get('/users/me')
        .then(({ data }) => {
          console.log(data);
          setUser(data);
          setUserReady(true);
        })
        .catch((error) => {
          console.error(error);
          if (error.response.status === 401) {
            navigate('/login');
          }
        });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, userReady, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
