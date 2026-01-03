import { useState } from 'react';

type LoginFormProps = {
  onSubmit: (email: string, password: string) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <p className="tracking-[0.25em] text-xs font-semibold">START FOR FREE</p>

      <h1 className="text-4xl underline md:text-5xl font-extrabold">SIGN IN</h1>

      <form
        className="mt-4 space-y-4 max-w-lg"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(email, password);
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-white/95 text-gray-900 px-4 py-3 rounded-md text-sm"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-white/95 text-gray-900 px-4 py-3 rounded-md text-sm"
        />
        <div className="flex p-2 justify-between items-center">
          <button
            type="submit"
            className="bg-[#ff7b2a] text-white font-semibold text-sm px-8 py-3 rounded-md shadow-lg"
          >
            Login
          </button>
          <button className="bg-red-200 opacity-75 rounded-3xl py-1 px-8 flex items-center justify-center text-slate-500 text-sm font-semibold">
            <img src="/Google.png" alt="Google_Icon" className="w-8 h-8" />
            Continue with Google
          </button>
        </div>
        <p className="flex justify-center text-sm mt-4">
          Don't have an Account?
          <button className="underline font-semibold">Create Account</button>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
