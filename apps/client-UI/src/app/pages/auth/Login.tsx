function Login() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-orange100">
      <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-3xl overflow-hidden w-[90vm] max-w-4xl">
        {/* Left illustration */}
        <div className="md:w-1/2 flex items-center justify-center bg-green-200 p-8">
          <img src="" alt="" />
        </div>
        {/* Right Form */}
        <div className="md:w-1/2 flex flex-col justify-center p-8">
          {/* Brand Logo */}
          <div className="flex justify-center mb-8">
            <span className="font-bold text-2xl text-orange-600">Kiddo</span>
          </div>
          <h2 className="text-2xl font-bold mb-6 text-center">Log In to Your Account</h2>
          <form className="flex flex-col gap-4">
            <input type="email"
            placeholder="Email address"
            className="border px-4 py-2 rounded focus:outline-none"
            required
            />
            <input type="password"
            placeholder="Password"
            className="border px-4 py-2 rounded focus:outline-none"
            required
            />
            <button type="submit" className="bg-orange-400 text-white py-2 rounded font-semibold hover:bg-orange-500 transition">Log In</button>
          </form>
          {/* Social Login and Links */}
          <div className="text-center mt-6">
            <span className="text-gray-500">Or sign in with</span>
            <div className="flex justify-center gap-4 mt-2">
              <button className="bg-gray-200 rounded p-2">G</button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <span className="text-gray-500 ">Don't have an account?</span>
            <a href="/signup" className="text-orange-400 ml-2 font-semibold underline"> Sign Up</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
