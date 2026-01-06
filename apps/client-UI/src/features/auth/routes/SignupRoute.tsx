import SignupForm from "../ui/SignupForm"
import SignupScreen from "../ui/SignupScreen"
import { useSignupViewModel } from "../viewmodel/useSignupViewModel"

const SignupRoute : React.FC = () => {
  const {signUp} = useSignupViewModel()
return(
  <SignupScreen>
    <SignupForm onSubmit={signUp}/>
  </SignupScreen>
)
}

export default SignupRoute