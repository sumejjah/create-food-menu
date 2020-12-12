import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthWrapper = ({children}) => {
  const { isLoading, error } = useAuth0();

  if(isLoading) {
    return <>Loading....</>
  }

  if(error) {
   return <>{error.message}</>
  }

return <>{children}</>
}

export default AuthWrapper;