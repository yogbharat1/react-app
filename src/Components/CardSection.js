import React, { useState } from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import Cards from './Cards';
import data from './data';

const CardSection = () => {
  const [noOfElement, setnoOfElement] = useState(3);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  }
  const slice = data.cardData.slice(0, noOfElement);

  return (
    <>
      <Row>
{slice.map((item, index) => {
            return (
        <Col md={4} className='mb-4' key={item.id}>
          
              <Cards item={item} key={index}/>
</Col>
            )
          })}
        
      </Row>
     <Row>
<Col className='text-center mb-4'>
      <Button
          variant='outline-danger' onClick={() => loadMore()}

className="font-weight-bold text-uppercase p-2"
        >Load More </Button>
</Col>
</Row>

    </>
  );
}

export default CardSection;

