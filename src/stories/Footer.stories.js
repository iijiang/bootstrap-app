import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Example/Footer',
  component: Container,
};

const Template = (args) => (
  <footer className={`footer py-${args.py} bg-${args.bg}`}>
    <Container>
      <p className="text-center mb-0">&copy; 2024 My Website. All Rights Reserved.</p>
    </Container>
  </footer>
);

export const Default = Template.bind({});
Default.args = {
  py: 4,
  bg: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  py: 5,
  bg: 'dark',
};
