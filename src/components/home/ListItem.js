import React, { Fragment } from 'react';
import { Card, Col } from 'react-bootstrap';

const ListItem = (props) => {
  const { item } = props;

  return (
    <Col className="p-0 pt-3 pr-3 pl-3">
      <Card>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.content}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ListItem;