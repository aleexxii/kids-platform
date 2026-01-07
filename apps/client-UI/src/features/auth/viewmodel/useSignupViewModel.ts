import { useEffect, useState } from 'react';

type OtpStatus =
  | 'IDLE' //before request
  | 'SENDING' //request sending
  | 'SENT' //otp sent, otp running
  | 'VERIFYING' //verifying otp
  | 'VERIFIED'
  | 'ERROR';

const OTP_DURATION = 30; //seconds

export const useSignupViewModel = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [otpStatus, setOtpStatus] = useState<OtpStatus>('IDLE');
  const [timer, setTimer] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ---------------- OTP TIMER ---------------- */
  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  /* ---------------- REQUEST OTP ---------------- */
  const requestOtp = async () => {
    if (!formData.email) {
      setError('Email is required');
      return;
    }
    setOtpStatus('SENDING');
    setError(null);
    try {
      // await authService.requestOtp(formData.email);

      setOtpStatus('SENT');
      setTimer(OTP_DURATION);
      setOtp(Array(6).fill(''));
    } catch {
      setOtpStatus('ERROR');
      setError('Failed to send OTP');
    }
  };

  /* ---------------- RESEND OTP ---------------- */
  const resendOtp = async () => {
    if (timer > 0) {
      await requestOtp();
    }
  };

  /* ---------------- OTP INPUT ---------------- */
  const handleOtpChange = (value: string, index: number) => {
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

  /* ---------------- VERIFY OTP ---------------- */
  const verifyOtp = async () => {
    const otpValue = otp.join('');
    if (otpValue.length != 6) {
      setError('Enter complete OTP');
      return;
    }
    setOtpStatus('VERIFYING');
    setError(null);
    try {
      // await authService.verifyOtp(formData.email, otpValue);
      setOtpStatus('VERIFIED');
    } catch {
      setOtpStatus('ERROR');
      setError('Invalid OTP');
    }
  };

  return {
    formData,
    setFormData,

    otp,
    otpStatus,
    timer,
    error,

    requestOtp,
    resendOtp,
    handleOtpChange,
    verifyOtp,
  };
};
