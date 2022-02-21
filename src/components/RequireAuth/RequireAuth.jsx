import { useLocation, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const RequireAuth = ({children}) => {
  const location = useLocation();
  const userSelector = useSelector(state => state.users[0]);

  if (!userSelector.isLogin) {
    return <Navigate to='/login' state={{from: location}} />
  }

  return children
}