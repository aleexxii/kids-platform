import { useState } from 'react';
import { authService } from '../services/auth.service';
import { authStore } from '../services/auth.store';

const validateEmail = (email : string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export const useAuthViewModel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {

    if(!email || !password){
        setError('Please enter both email and password')
        return
    }

    if(!validateEmail(email)){
        setError('Please enter a valid email address')
        return
    }

    setIsLoading(true);
    setError(null);

    try {
      const {token, user} = await authService.login({ email, password });

      //Persist session
      authStore.setSession(token, user)

      //next redirect

    } catch (err: any) {

      if (err.message === "Invalid email or password") {
        setError("Incorrect email or password");
      } else {
        setError("Unable to sign in. Please try again.");
      }

    } finally {
      setIsLoading(false);
    }
  };

  const logout = () =>{
    authStore.clearSession()
  }

  return {
    login,
    logout,
    isLoading,
    error,
  };
};
