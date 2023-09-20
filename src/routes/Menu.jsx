import React from 'react'
import Card from 'react-bootstrap/Card';

export const Menu = () => {
  return (
    <>
      {[
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>aqui va el titulo: pizza 1, pizza 2</Card.Title>
            <Card.Title>aqui va el title2 </Card.Title>
            <Card.Text>
              aqui va la description
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}
