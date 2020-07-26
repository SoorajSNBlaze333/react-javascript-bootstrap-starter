import React, { Fragment, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const AppLayout = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [])

  if (loading) {
    return <div>Loading AppLayout...</div>
  }

  return (
    <Fragment>
      <Header />
      <div className="content">{props.children}</div>
      <Footer />
    </Fragment>
  )
}

export default AppLayout;