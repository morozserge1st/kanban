import * as React from 'react';
import Tasks from './tasks';

const Footer = () => (
  <footer className="footer">
    <Tasks />
    <p className="about">Kanban board by Sergei Morozov, 2019</p>
  </footer>
);

export default Footer;
