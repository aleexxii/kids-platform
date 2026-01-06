import LoginForm from '../ui/LoginForm';
import LoginScreen from '../ui/LoginScreen';
import { useLoginViewModel } from '../viewmodel/useLoginViewModel';

const LoginRoute: React.FC = () => {
  const { login, error, isLoading } = useLoginViewModel();
  return (
    <LoginScreen>
      <LoginForm
      onSubmit={login}
      isLoading={isLoading}
      error={error} />
    </LoginScreen>
  );
};

export default LoginRoute;
