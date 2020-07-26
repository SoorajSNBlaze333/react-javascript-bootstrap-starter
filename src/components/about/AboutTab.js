import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const AboutTab = (props) => {
  const renderAboutHome = () => {
    return (
      <div className="p-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada fames. Cursus euismod quis viverra nibh cras. Sed enim ut sem viverra aliquet eget. Quam adipiscing vitae proin sagittis nisl rhoncus. Volutpat sed cras ornare arcu dui vivamus arcu. Posuere lorem ipsum dolor sit amet consectetur. Proin fermentum leo vel orci porta non pulvinar. Non sodales neque sodales ut etiam sit. Tellus in hac habitasse platea dictumst vestibulum rhoncus.
      </div>
    )
  }

  const renderAboutProfile = () => {
    return (
      <div className="p-4">
        Tellus in metus vulputate eu scelerisque felis imperdiet. Tempor nec feugiat nisl pretium fusce id. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Justo donec enim diam vulputate ut pharetra. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Quam vulputate dignissim suspendisse in est. Dictum fusce ut placerat orci nulla pellentesque. Condimentum lacinia quis vel eros donec. Velit euismod in pellentesque massa placerat duis ultricies lacus. Amet volutpat consequat mauris nunc congue. Enim sed faucibus turpis in eu mi bibendum neque egestas. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Enim nunc faucibus a pellentesque sit amet porttitor. Elementum sagittis vitae et leo.
      </div>
    ) 
  }

  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Home">
        {renderAboutHome()}
      </Tab>
      <Tab eventKey="profile" title="Profile">
        {renderAboutProfile()}
      </Tab>
    </Tabs>
  )
}

export default AboutTab;