import React, { useState, useEffect } from 'react';
import AboutTab from '../../components/about/AboutTab';

const About = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [])

  if (loading) {
    return <div>Loading About...</div>
  }

  return (
    <div className="p-0">
      <AboutTab />
    </div>
  )
}

export default About;