import React, { Fragment, useState, useEffect } from 'react';

const Home = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [])

  if (loading) {
    return <div>Loading Home...</div>
  }

  return (
    <Fragment>
      Home Page
    </Fragment>
  )
}

export default Home;