import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const UserProfile = (props) => {
  return (
    <Card id="user-profile" className="p-3">
      <Card.Title>
        <div id="username" className="user-display">UserName</div>
      </Card.Title>
      <Card.Text as="div">
        <div id="email" className="mt-2"><b>Email:</b> user@profile.com</div>
        <div><b>Address:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada fames</div>
        <Button id="edit-profile" className="mt-3" variant="primary">Edit Profile</Button>
      </Card.Text>
    </Card>
  )
}

export default UserProfile;