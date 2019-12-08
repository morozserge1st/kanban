import * as React from 'react';
import Button from '../button';
import Ellipsis from '../../icons/ellipsis';
import { IssueModel } from '../../types/issue-model';
import { SelectContainer } from './select-container';
import Input from '../input';
import '../../styles/main/card.scss';
import CardHeader from './card-header';

export interface CardProps {
  id: number,
  title: string,
  issues: IssueModel[],
  index: number,
  disabled: boolean,
  onMove: (id: number) => void,
  onAdd: (value: string) => void
}

class Card extends React.Component<CardProps> {
  state = {
    isOpen: false
  }

  onOpen = () => {
    this.setState({
      isOpen: true
    })
  }

  onClose = (value: string | number) => {
    if (typeof value === 'string') {
      this.props.onAdd(value);
    } else {
      this.props.onMove(value);
    }

    this.setState({
      isOpen: false
    })
  }

  render() {
    const {
      id,
      title,
      issues,
      index,
      disabled
    } = this.props;
    const { isOpen } = this.state;
    let button;

    if (index === 0) {
      button = <Input onBlur={this.onClose} className="card__input"/>;
    } else {
      button = <SelectContainer onClose={this.onClose} index={index} className="card__input"/>;
    }

    return (
      <section className="card">
        <CardHeader title={title} id={id}/>
        <div className="container">
          <div className="card__list">
            {issues.map(issue =>
              <div
                className="card__item"
                key={issue.id}
              >
                {issue.name}
              </div>
            )}

            {isOpen ? (
              <div>
                {button}
              </div>
            ) : null}
          </div>

          <Button
            className="card__button"
            onClick={this.onOpen}
            disabled={disabled}
          >
            <span>+</span>Add card
          </Button>
        </div>
      </section>
    );
  }
}

export default Card;
