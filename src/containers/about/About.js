import React, { Fragment, useState, useEffect } from 'react';

const About = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [])

  if (loading) {
    return <div>Loading About...</div>
  }

  return (
    <Fragment>
      About Page
    </Fragment>
  )
}

export default About;