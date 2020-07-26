import React, { Fragment, useState, useEffect } from 'react';
import UserProfile from '../../components/profile/UserProfile';

const Profile = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [])

  if (loading) {
    return <div>Loading Profile...</div>
  }

  return (
    <div className="w-100 p-4">
      <UserProfile />
    </div>
  )
}

export default Profile;