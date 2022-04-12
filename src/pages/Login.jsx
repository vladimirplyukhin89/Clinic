import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../components/hooks/useAuth';

const Login = () => {
    let { user, signout } = useAuth();
    let navigate = useNavigate();
    let location = useLocation();

    if (!user) {
        return <p>Вы не вошли в личный кабинет.</p>
    }

    return (
        <>
            <h1>Добрый день, {user}</h1>
            <button
                onClick={() => {
                    signout(() => navigate("/"));
                }}
            >Выйти</button>
            <button>На главную</button>
        </>
    );
};
export default Login;
