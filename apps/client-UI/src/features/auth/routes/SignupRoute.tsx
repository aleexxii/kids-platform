import SignupForm from '../ui/SignupForm';
import SignupScreen from '../ui/SignupScreen';
import { useSignupViewModel } from '../viewmodel/useSignupViewModel';

const SignupRoute: React.FC = () => {
  const vm = useSignupViewModel();
  return (
    <SignupScreen>
      <SignupForm {...vm}/>
    </SignupScreen>
  );
};

export default SignupRoute;
