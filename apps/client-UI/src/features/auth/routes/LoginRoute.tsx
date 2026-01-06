import LoginForm from '../ui/LoginForm';
import LoginScreen from '../ui/LoginScreen';
import { useAuthViewModel } from '../viewmodel/useAuthViewModel';

const LoginRoute: React.FC = () => {
  const { login, error, isLoading } = useAuthViewModel();
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
