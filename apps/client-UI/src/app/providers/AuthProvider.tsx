import { authStore, AuthUser } from '@/features/auth/services/auth.store';
import { createContext, useContext, useEffect, useState } from 'react';

type AuthContextType = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const storedUser = authStore.getUser();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const logout = () => {
    authStore.clearSession();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>{
    const ctx = useContext(AuthContext)
    if(!ctx) throw new Error("useAuth must be used inside AuthProvider");
    return ctx
}