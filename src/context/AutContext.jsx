import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider ({ children })  {
  const [authToken, setAuthToken] = useState(() => {
    const token = JSON.parse(localStorage.getItem('authToken'));
    const userName = JSON.parse(localStorage.getItem('authName'));
    return { token, userName };
  });

  useEffect(() => {
    localStorage.setItem('authToken', JSON.stringify(authToken.token));
    localStorage.setItem('authName', JSON.stringify(authToken.userName));
  }, [authToken]);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
}
