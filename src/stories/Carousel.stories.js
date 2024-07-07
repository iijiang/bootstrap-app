import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Example/Carousel',
  component: Carousel,
};

const Template = (args) => (
  <Carousel>
    {args.items.map((item, index) => (
      <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={item.src}
          alt={item.alt}
        />
        <Carousel.Caption>
          <h3>{item.captionTitle}</h3>
          <p>{item.captionText}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      alt: 'First slide',
      captionTitle: 'Exquisite Cuisine',
      captionText: 'Discover the taste of luxury.'
    },
    {
      src: 'https://images.unsplash.com/photo-1532581291347-9c39cf10a73c',
      alt: 'Second slide',
      captionTitle: 'Adventure Awaits',
      captionText: 'Join us to explore the wild sides of nature.'
    },
    {
      src: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff',
      alt: 'Third slide',
      captionTitle: 'City Night Life',
      captionText: 'Experience the vibrant nightlife in the bustling cities.'
    }
  ]
};
