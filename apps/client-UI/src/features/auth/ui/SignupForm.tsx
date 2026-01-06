import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useSignupViewModel } from '../viewmodel/useSignupViewModel';

type SignupFormProp = {
  onSubmit: (name: string, email: string) => void;
};

const SignupForm: React.FC<SignupFormProp> = ({ onSubmit }) => {
  const { handleChange, handleGetOtp, showOtp, otp } = useSignupViewModel();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      <p className="tracking-[0.25em] text-xs font-semibold">START FOR FREE</p>
      <h1 className="text-4xl md:text-5xl font-extrabold">
        CREATE NEW ACCOUNT
      </h1>

      <p className="text-sm mt-4">
        Already A Member?{' '}
        <a href="/login" className="underline font-semibold">
          Log In
        </a>
      </p>
      <form
        className="mt-4 space-y-4 max-w-lg"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(name, email);
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="First name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white/95 text-gray-900 px-4 py-3 rounded-md text-sm outline-none"
          />
          <input
            type="text"
            placeholder="Last name"
            className="bg-white/95 text-gray-900 px-4 py-3 rounded-md text-sm outline-none"
          />
        </div>

        <input
          type="text"
          placeholder="Username"
          className="w-full bg-white/95 text-gray-900 px-4 py-3 rounded-md text-sm outline-none"
        />

        <div className="flex justify-start gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-3/4 bg-white/95 text-gray-900 px-4 py-3 rounded-md text-sm pr-10 outline-none"
          />
          <button
            type="button"
            className="bg-[#ff7b2a] text-white px-4 font-semibold text-sm  rounded-md shadow-lg"
            onClick={handleGetOtp}
          >
            Get OTP
          </button>
        </div>

        <AnimatePresence>
          {showOtp && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-start gap-4"
            >
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  id={`otp-${idx}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, idx)}
                  className="w-10 h-10 rounded-lg text-gray-900 text-center font-semibold outline-none"
                />
              ))}
              <button className="bg-[#ff7b2a] text-white px-6 py-3 font-semibold text-sm  rounded-lg shadow-lg">
                Verify
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-white/95 text-gray-900 px-4 py-3 rounded-md text-sm pr-10 outline-none"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
            *
          </span>
        </div>

        <button
          type="submit"
          className="mt-2 bg-[#ff7b2a] text-white font-semibold text-sm px-8 py-3 rounded-md shadow-lg"
        >
          CREATE ACCOUNT
        </button>
      </form>
    </>
  );
};

export default SignupForm;
