import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../components/hooks/useAuth';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const { user } = useAuth();

    if (!user) {
        return <Navigate to='/' state={{ from: location }} replace />
    }

    return children;
};

export default RequireAuth;