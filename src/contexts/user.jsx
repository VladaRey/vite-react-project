import React, { useMemo, useState } from "react";
import { useContext } from "react";

const UserContext = React.createContext(null);

export const useUserContext = () => {
  return useContext(UserContext);
};

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState();
  const contextValue = useMemo(
    () => ({
      user,
      login: setUser,
      logout: () => {
        setUser(null);
      },
    }),
    [user]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
