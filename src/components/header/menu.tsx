import * as React from 'react';
import '../../styles/header/menu.scss';

interface MenuProps {
  onClick: () => void
}

class Menu extends React.Component<MenuProps> {

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick = (e: any) => {
    if (e.target.className.includes('menu')) {
      return;
    }
    this.props.onClick();
  }


  render() {
    return (
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <a href="#" className="menu__link">My account</a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">My tasks</a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">Log out</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
