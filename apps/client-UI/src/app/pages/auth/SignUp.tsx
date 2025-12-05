import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function SignUp() {
  //otp animation
  const [showOtp, setShowOtp] = useState(false);
  console.log(showOtp);
  // state variables for otp
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

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

    setShowOtp(true)
  }

  return (
    <main className="min-h-screen w-full bg-gradient-to-tr from-red-900 via-red-600 to-red-400 relative overflow-hidden">
      {/* LEFT: faded big character + text + form */}
      <section className="h-screen flex items-center px-6 md:px-12 lg:px-20 relative z-10">
        <div className="w-full lg:w-1/2 relative max-w-xl text-[#ffffff]">
          {/* big soft character behind form (LEFT SIDE) */}
          <img
            src="/Character_1.png"
            alt="Background hero"
            className="absolute -left-10 -bottom-36 object-contain opacity-55 pointer-events-none"
          />

          <div className="relative z-10 space-y-6">
            <p className="tracking-[0.25em] text-xs font-semibold">
              START FOR FREE
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold">
              CREATE NEW ACCOUNT
            </h1>

            <p className="text-sm mt-4">
              Already A Member?{' '}
              <button className="underline font-semibold">Log In</button>
            </p>

            <form className="mt-4 space-y-4 max-w-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First name"
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
          </div>
        </div>
      </section>

      {/* RIGHT-SIDE GRADIENT PANEL (behind avatar) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[45%] bg-[url('/petals-bg.png')]" />
      {/* AVATAR LAYER: locked to screen right end */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-end">
        <img
          src="/Character_2.png"
          alt="Hero avatar"
          className="h-[95%] object-contain drop-shadow-2xl"
        />
      </div>
    </main>
  );
}

export default SignUp;
