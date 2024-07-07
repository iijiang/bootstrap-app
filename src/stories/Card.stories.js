import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default {
  title: 'Example/Card',
  component: Card,
};

const Template = (args) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={args.image} />
    <Card.Body>
      <Card.Title>{args.title}</Card.Title>
      <Card.Text>{args.text}</Card.Text>
      <Button variant={args.buttonVariant}>{args.buttonText}</Button>
    </Card.Body>
  </Card>
);

export const Primary = Template.bind({});
Primary.args = {
  image: 'https://via.placeholder.com/150',
  title: 'Card Title',
  text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  buttonText: 'Go somewhere',
  buttonVariant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  image: 'https://via.placeholder.com/150',
  title: 'Secondary Card',
  text: 'This is another card with different styling and content to showcase a secondary card type.',
  buttonText: 'Learn more',
  buttonVariant: 'secondary',
};
