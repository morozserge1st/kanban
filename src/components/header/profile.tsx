import * as React from 'react';
import Menu from './menu';
import Arrow from './arrow';
import Avatar from './avatar';

type ProfileState = {
  isOpen: boolean
}

class Profile extends React.Component<{}, ProfileState> {
  state = {
    isOpen: false
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const {
      isOpen
    } = this.state;

    const className = `arrow ${isOpen ? "open" : null}`
    return (
      <>
        <div 
          className="profile"
          onClick={this.handleClick}
        >
          <Avatar />
          <Arrow 
            className={className}
          />
        </div>

        {isOpen ? (
          <Menu handleClick={this.handleClick}/>
        ) : null}
      </>
    )
  }
};

export default Profile;
