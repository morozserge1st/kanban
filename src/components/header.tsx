import * as React from 'react';
import Button from './button';
import Menu from './menu';
import Logo from './icons/logo';
import AddIcon from './icons/add-icon';
import Arrow from './icons/arrow';
import Avatar from './icons/avatar';

interface HeaderState {
  isOpen: boolean
}

class Header extends React.Component<{}, HeaderState> {
  state = {
    isOpen: false
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { isOpen } = this.state;
    const className = `arrow ${isOpen ? "open" : null}`;

    return (
      <header className="header">
        <Logo />
        <div className="toolbar">
          <Button className="toolbar__button">
            <AddIcon />
            <span>Create new list</span>
          </Button>

          <div
            className="profile"
            onClick={this.handleClick}
          >
            <Avatar />
            <Arrow className={className} />
          </div>

          {isOpen ? (
            <Menu onClick={this.handleClick}/>
          ) : null}
        </div>
      </header>
    );
  }
}

export default Header;
