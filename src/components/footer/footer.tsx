import * as React from 'react';
import '../../styles/footer/footer.scss';
import { StateContainer } from './state-container';

const Footer: React.FunctionComponent = () => (
  <footer className="footer">
    <StateContainer />
    <p className="about">Kanban board by Sergei Morozov, 2019</p>
  </footer>
);

export default Footer;
