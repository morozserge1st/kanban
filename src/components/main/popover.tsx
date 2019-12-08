import * as React from 'react';
import '../../styles/main/popover.scss';

interface PopoverProps {
  onClose: () => void,
  edit: () => void,
  remove: () => void,
  id: number
}


class Popover extends React.Component<PopoverProps> {
  private popoverRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick = (e: any) => {
    if (e.target.className.includes('popover')) {
      return;
    }
    this.props.onClose();
  }

  render() {
    const {
      edit,
      remove
    } = this.props;
    return (
      <div className="popover" ref={this.popoverRef}>
        <ul className="popover__list">
          <li className="popover__item" onClick={edit}>
            Edit
          </li>
          <li className="popover__item" onClick={remove}>
            Delete
          </li>
        </ul>
      </div>
    );
  }
}

export default Popover;
