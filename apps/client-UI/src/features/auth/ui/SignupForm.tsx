import { AnimatePresence, motion } from 'framer-motion';

type OtpStatus =
  | 'IDLE'
  | 'SENDING'
  | 'SENT'
  | 'VERIFYING'
  | 'VERIFIED'
  | 'ERROR';

type SignupFormProp = {
  /* -------- FORM DATA -------- */
  formData: {
    name: string;
    email: string;
    password: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      password: string;
    }>
  >;

  /* -------- OTP -------- */
  otp: string[];
  otpStatus: OtpStatus;
  timer: number;

  /* -------- UI STATE -------- */
  error: string | null;

  /* -------- ACTIONS -------- */
  requestOtp: () => void;
  resendOtp: () => void;
  handleOtpChange: (value: string, index: number) => void;
  verifyOtp: () => void;
};

const SignupForm: React.FC<SignupFormProp> = ({
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
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
  };

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
      <form className="mt-4 space-y-4 max-w-lg" onSubmit={handleSubmit}>
        {error && <p className="text-red-300">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="First name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-white/95 text-gray-900 px-4 py-3 rounded-md text-sm outline-none"
          />
          <input
            type="text"
            placeholder="Last name"
            className="bg-white/95 text-gray-900 px-4 py-3 rounded-md text-sm outline-none"
          />
        </div>

        <div className="flex justify-start gap-4">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-3/4 bg-white/95 text-gray-900 px-4 py-3 rounded-md text-sm pr-10 outline-none"
          />

          <button
            type="button"
            className="bg-[#ff7b2a] text-white px-4 font-semibold text-sm  rounded-md shadow-lg"
            disabled={otpStatus === 'SENDING' || timer > 0}
            onClick={timer === 0 ? requestOtp : undefined}
          >
            {otpStatus === 'SENDING'
              ? 'Sending...'
              : timer > 0
              ? `Resend in ${timer}s`
              : 'Get OTP'}
          </button>
        </div>

        <AnimatePresence>
          {(otpStatus === 'SENT' || otpStatus === 'VERIFYING') && (
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
                  onChange={(e) => handleOtpChange(e.target.value, idx)}
                  className="w-10 h-10 rounded-lg text-gray-900 text-center font-semibold outline-none"
                />
              ))}
              <button
                className="bg-[#ff7b2a] text-white px-6 py-3 font-semibold text-sm  rounded-lg shadow-lg"
                onClick={verifyOtp}
              >
                {otpStatus === 'VERIFYING' ? 'Verifying...' : 'Verify OTP'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="relative">
          <input
            type="password"
            placeholder="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full bg-white/95 text-gray-900 px-4 py-3 rounded-md text-sm outline-none"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
            *
          </span>
        </div>
        <div className="relative">
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full bg-white/95 text-gray-900 px-4 py-3 rounded-md text-sm pr-10 outline-none"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
            *
          </span>
        </div>

        <button
          type="submit"
          className="mt-2 bg-[#ff7b2a] text-white font-semibold hover:opacity-85 text-sm px-8 py-3 rounded-md shadow-lg"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignupForm;
