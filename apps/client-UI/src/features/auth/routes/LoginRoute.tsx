// const Login: React.FC = () => (
//   <main className="min-h-screen w-full bg-gradient-to-tr from-red-900 via-red-600 to-red-400 relative overflow-hidden">

import LoginForm from "../ui/LoginForm";
import LoginScreen from "../ui/LoginScreen";
import { useAuthViewModel } from "../viewmodel/useAuthViewModel"

    
//     <section className="h-screen flex items-center px-6 md:px-12 lg:px-20 relative z-10">
//       <div className="w-full lg:w-1/2 relative max-w-xl text-[#ffffff]">
        
//         <img
//           src="/Character_1.png"
//           alt="Background hero"
//           className="absolute -left-10 -bottom-52 object-contain opacity-55 pointer-events-none"
//         />

//         <div className="relative z-10 space-y-6">
//           <p className="tracking-[0.25em] text-xs font-semibold">
//             START FOR FREE
//           </p>
//           <h1 className="text-4xl underline md:text-5xl font-extrabold">
//             SIGN IN
//           </h1>
//           <div className="flex justify-center"></div>
//           <form className="mt-4 space-y-4 max-w-lg">
//             <div className="relative">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full bg-white/95 text-gray-900 px-4 py-3 rounded-md text-sm pr-10 outline-none"
//               />
//               <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
//                 @
//               </span>
//             </div>

//             <div className="relative">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full bg-white/95 text-gray-900 px-4 py-3 rounded-md text-sm pr-10 outline-none"
//               />
//               <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
//                 *
//               </span>
//             </div>
//             <div className="flex justify-around items-center">
//               <button
//                 type="submit"
//                 className="mt-2 bg-[#ff7b2a] text-white font-semibold text-sm px-8 py-3 rounded-md shadow-lg"
//               >
//                 Login
//               </button>
//               <button className="mt-4 bg-red-200 opacity-75 rounded-3xl py-1 px-8 flex items-center justify-center text-slate-500 text-sm font-semibold">
//                 <img src="/Google.png" alt="Google_Icon" className="w-8 h-8" />
//                 Continue with Google
//               </button>
//             </div>
//             <p className="text-sm mt-4">
//               Don't have an Account?{' '}
//               <button className="underline font-semibold">
//                 Create Account
//               </button>
//             </p>
//           </form>
//         </div>
//       </div>
//     </section>

    
//     <div className="pointer-events-none absolute inset-y-0 right-0 w-[45%] bg-[url('/petals-bg.png')]" />
    
//     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-end">
//       <img
//         src="/Character_2.png"
//         alt="Hero avatar"
//         className="h-[95%] object-contain drop-shadow-2xl"
//       />
//     </div>
//   </main>
// );

// export default Login;


const LoginRoute : React.FC = () => {
  const {login} = useAuthViewModel();
  return(
    <LoginScreen >
      <LoginForm onSubmit={login}/>
    </LoginScreen>
  )
}

export default LoginRoute
