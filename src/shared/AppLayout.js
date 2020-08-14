import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

const AppLayout = (props) => {
  return (
    <Fragment>
      <Header />
      <div className="content">{props.children}</div>
      <Footer />
    </Fragment>
  )
}

export default AppLayout;