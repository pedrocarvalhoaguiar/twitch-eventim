import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({children, ...rest}) => {
    let { user } = useAuth()

    return !user ? <Navigate to='/login'/> : children;
}

export default PrivateRoute;