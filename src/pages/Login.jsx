import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/hooks/useAuth';

const Login = () => {
    let { user, signout } = useAuth();
    let navigate = useNavigate();

    if (!user) {
        return <p>Вы не вошли в личный кабинет.</p>
    }

    return (
        <>
            <h1>Добрый день, {user}</h1>
            <button
                onClick={() => {
                    signout(() => navigate("/", { replace: true }));
                }}
            >На главную</button>
        </>
    );
};
export default Login;
