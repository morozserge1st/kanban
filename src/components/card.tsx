import * as React from 'react';
import Button from './button';
import Ellipsis from './icons/ellipsis';
import { IssueModel } from '../types/issue-model';
import { SelectContainer } from './select-container';
import Input from './input';

export interface CardProps {
  title: string,
  issues: IssueModel[],
  index: number,
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
      title,
      issues,
      index
    } = this.props;
    const { isOpen } = this.state;
    let button;

    if (index === 0) {
      button = <Input onClose={this.onClose}/>;
    } else {
      button = <SelectContainer onClose={this.onClose} index={index} />;
    }

    return (
      <section className="card">
        <div className="card__header">
          <span>{title}</span>
          <Ellipsis />
        </div>

        <div className="card__content">
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
          >
            <span>+</span>Add card
          </Button>
        </div>
      </section>
    );
  }
}

export default Card;
