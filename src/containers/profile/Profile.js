import React, { Fragment, useState, useEffect } from 'react';

const Profile = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [])

  if (loading) {
    return <div>Loading Profile...</div>
  }

  return (
    <Fragment>
      Profile Page
    </Fragment>
  )
}

export default Profile;