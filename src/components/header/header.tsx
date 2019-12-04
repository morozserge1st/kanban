import * as React from 'react';
import Logo from '../../icons/logo';
import Toolbar from './toolbar';
import '../../styles/header/header.scss';

const Header: React.FunctionComponent = () => (
  <header className="header">
    <Logo />
    <Toolbar />
  </header>
);

export default Header;
