import * as React from 'react';
import Ellipsis from '../../icons/ellipsis';
import '../../styles/main/card.scss';
import { PopoverContainer } from './popover-container';

export interface CardHeaderProps {
  id: number,
  title: string
}

class CardHeader extends React.Component<CardHeaderProps> {
  state = {
    isOpen: false
  }

  onOpen = () => {
    this.setState({
      isOpen: true
    })
  }

  onClose = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
    const {
      id,
      title
    } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="card__header">
        <span>{title}</span>
        <Ellipsis onClick={this.onOpen}/>
        {isOpen ? <PopoverContainer onClose={this.onClose} id={id}/> : null}
      </div>
    );
  }
}

export default CardHeader;
