type LoginScreenProps = {
    children : React.ReactNode;
}


const LoginScreen : React.FC<LoginScreenProps> = ({children}) => {
return(
    <main className="min-h-screen w-full bg-gradient-to-tr from-red-900 via-red-600 to-red-400 relative overflow-hidden">
      <section className="h-screen flex items-center px-6 md:px-12 lg:px-20 relative z-10">
        <div className="w-full lg:w-1/2 relative max-w-xl text-white">
          <img
            src="/Character_1.png"
            alt="Background hero"
            className="absolute -left-10 -bottom-52 object-contain opacity-55 pointer-events-none"
          />

          <div className="relative z-10 space-y-6">
            {children}
          </div>
        </div>
      </section>

      <div className="pointer-events-none absolute inset-y-0 right-0 w-[45%] bg-[url('/petals-bg.png')]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-end">
        <img
          src="/Character_2.png"
          alt="Hero avatar"
          className="h-[95%] object-contain drop-shadow-2xl"
        />
      </div>
    </main>
)
}

export default LoginScreen