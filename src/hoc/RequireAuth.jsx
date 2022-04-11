import { Location, Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const auth = false;

    if (!auth) {
        return
    }

    return (
        <div>

        </div>
    );
};

export default RequireAuth;