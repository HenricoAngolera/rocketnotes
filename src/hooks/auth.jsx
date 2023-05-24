import { createContext, useContext } from "react";

export const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{ name: "Henrico Angolera", email: "henrico@email.com" }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }

