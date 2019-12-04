import * as React from 'react';
import { ButtonContainer } from './button-container';
import Menu from './menu';
import AddIcon from '../../icons/add-icon';
import Profile from './profile';
import '../../styles/header/toolbar.scss';

interface ToolbarState {
  isOpen: boolean
}

class Toolbar extends React.Component<{}, ToolbarState> {
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
    const className = `arrow${isOpen ? '--open' : ''}`;

    return (
      <div className="toolbar">
        <ButtonContainer className="toolbar__button">
          <AddIcon />
          <span>Create new list</span>
        </ButtonContainer>

        <Profile
          onClick={this.handleClick}
          className={className}
        />

        {isOpen ? (
          <Menu onClick={this.handleClick}/>
        ) : null}
      </div>
    );
  }
}

export default Toolbar;
