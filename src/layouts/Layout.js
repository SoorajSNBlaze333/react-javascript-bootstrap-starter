import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import AppLayout from '../shared/AppLayout';

const Layout = ({ component: Component, ...rest }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [])

  if (loading) {
    return <div>Loading Layout...</div>
  }

  return (
    <Route {...rest} render={props => (
      <AppLayout>
        <Component {...props} />
      </AppLayout>
    )}/>
  )
}

export default Layout;