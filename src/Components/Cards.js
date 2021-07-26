import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './../App.scss';

const Cards = (props) => {
  /*Use Defualt Boostrap color for Card Background */
  const bgColor = ['primary', 'info', 'danger', 'success'];	
  const getBgColor = (i) => `bg-${bgColor[i % 4]}`;

  return (
    <Card className={`h-100 text-white shadow ${getBgColor(props.item.id)} `} >
      <Card.Body className='d-flex flex-column'>
        <div className='date font-weight-light mb-3'>{props.item.publishdate}</div>
        <Card.Title>{props.item.title}</Card.Title>
        <Card.Text className='pt-3'>{props.item.desc}</Card.Text>
      </Card.Body>
      <Card.Footer className='border-top-0 pt-5 pb-4 bg-transparent'>
        <Card.Link
          href={props.item.url}
          className='text-uppercase font-weight-bold text-white border border-white p-2 rounded text-decoration-none'
        >
          Read more
        </Card.Link>
      </Card.Footer>
    </Card>
  )

}

Cards.propTypes = {
  item: PropTypes.object.isRequired
}

export default Cards;
