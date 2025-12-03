
const Login:React.FC = () => (
      <main className="min-h-screen w-full bg-gradient-to-tr from-red-900 via-red-600 to-red-400 relative overflow-hidden">
      {/* LEFT: faded big character + text + form */}
      <section className="h-screen flex items-center px-6 md:px-12 lg:px-20 relative z-10">
        <div className="w-full lg:w-1/2 relative max-w-xl text-[#ffffff]">
          {/* big soft character behind form (LEFT SIDE) */}
          <img
            src="/Character_1.png"
            alt="Background hero"
            className="absolute -left-10 -bottom-52 object-contain opacity-55 pointer-events-none"
          />

          <div className="relative z-10 space-y-6">
            <p className="tracking-[0.25em] text-xs font-semibold">
              START FOR FREE
            </p>
            <h1 className="text-4xl underline md:text-5xl font-extrabold">
              SIGN IN
            </h1>

            <p className="text-sm mt-4">
              Don't have an Account?
              <button className="underline font-semibold">Create Account</button>
            </p>

            <form className="mt-4 space-y-4 max-w-lg">

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/95 text-gray-900 px-4 py-3 rounded-md text-sm pr-10 outline-none"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                  @
                </span>
              </div>

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
                Login
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
)

export default Login;