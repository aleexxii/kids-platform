import { useState } from "react";

export const useSignupViewModel = () =>{

      const [otp, setOtp] = useState(['', '', '', '', '', '']);
        const [showOtp, setShowOtp] = useState(false);

    const signUp = async (name:string, email:string)=>{
        return
    }

      const handleChange = (value: string, index: number) => {
    // allow only one digit for each (0-9)
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // move to the next input if not empty automatically
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

    const handleGetOtp = () => {
    setShowOtp(true);
  };

    return {
        signUp,
        showOtp,
        otp,
        handleChange,
        handleGetOtp
    }
}