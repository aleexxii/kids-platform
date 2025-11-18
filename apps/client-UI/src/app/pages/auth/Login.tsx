function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
    <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden w-[90vw] max-w-4xl">
      {/* Left Illustration */}
      <div className="md:w-1/2 flex items-center justify-center bg-green-200 p-8">
        <img
          src="/assets/signup_illustration.png"
          alt="Signup illustration"
          className="w-80 h-auto object-contain"
        />
      </div>
      {/* Right Form */}
      <div className="md:w-1/2 flex flex-col justify-center p-8">
        <div className="flex justify-start mb-8">
          <span className="font-bold text-2xl text-green-700 font-Bungee">KIDDO</span>
        </div>
        <h2 className="text-3xl font-bold mb-6 text-center font-Poppins">Login account</h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email address"
            className="border px-4 py-3 rounded-full focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border px-4 py-3 rounded-full focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-orange-400 text-white py-3 rounded-full font-semibold text-lg hover:bg-orange-500 transition"
          >
            Create account
          </button>
        </form>
        <div className="text-center mt-6">
          <span className="text-gray-500">or sign up with</span>
          <div className="flex justify-center gap-4 mt-2">
            {/* Replace with SVG icons for Google, Microsoft, GitHub */}
            <button className="bg-orange-400 hover:bg-orange-500 rounded-full p-3 transition">
              {/* Google Icon */}
              G
            </button>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          By creating an account you agree to Messimo’s
          <a href="#" className="text-green-700 font-semibold ml-1">Terms of Services</a>
          and
          <a href="#" className="text-green-700 font-semibold ml-1">Privacy Policy</a>.
        </div>
        <div className="mt-6 text-center">
          <span className="text-gray-500">Have an account?</span>
          <a href="/login" className="text-green-700 ml-2 font-semibold underline">Log in</a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Login;
