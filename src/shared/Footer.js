import React, { Fragment, useState, useEffect } from 'react';

const Footer = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [])

  if (loading) {
    return <div>Loading Footer...</div>
  }

  return (
    <small className="w-100 d-flex justify-content-center align-items-center footer text-muted">
      React Bootstrap - Javascript Starter Template
    </small>
  )
}

export default Footer;