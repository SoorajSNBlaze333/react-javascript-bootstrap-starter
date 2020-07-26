import React, { Fragment, useState, useEffect } from 'react';
import { generateList } from '../../libs/Utils';
import ListItem from '../../components/home/ListItem';
import { Row } from 'react-bootstrap';

const Home = (props) => {
  const [list, setList] = useState([]);

  const updateList = () => {
    const randomList = generateList();
    setList(randomList);
  }

  useEffect(() => {
    updateList();
  }, []);

  const renderListItem = (item, index) => <ListItem item={item} key={index}/>

  const renderList = () => list.map(renderListItem);

  return (
    <Row className="h-100 m-0" xs={1} sm={1} md={2} lg={3} xl={3}>
      {renderList()}
    </Row>
  )
}

export default Home;