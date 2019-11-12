import * as React from 'react';
import Button from '../button';
import Wrap from './wrap';

interface IssuesProps {
  list: any,
  issues: {id: number; name: string;}[],
  onAdd: (value: string) => void,
  onMove: (id: number, index: number) => void,
  index: number
}

class Issues extends React.Component<IssuesProps> {
  state = {
    visible: false
  }

  handleVisible = () => {
    this.setState({
      visible: true
    })
  }

  onAdd = (value: string) => {
    this.setState({
      visible: false
    })

    if(value.trim()) {
      this.props.onAdd(value);
    }
  }

  onMove = (id: number) => {
    this.setState({
      visible: false
    })
    
    if(id) {
      this.props.onMove(id, this.props.index);
    }
  }

  render() {
    const {
      visible
    } = this.state;

    const {
      issues,
      index,
      list
    } = this.props;
    
    return (
      <div className="card__list">
      {issues.map(issue =>
        <div 
          className="card__item"
          key={issue.id}  
        >
          {issue.name}
        </div>
      )}
      {visible ? <Wrap className="wrap" index={index} onAdd={this.onAdd} onMove={this.onMove} list={list}/> : null}
      <Button 
        className="card__button"
        onClick={this.handleVisible}
      >
        <span>+</span>Add card
      </Button>

    </div>
    );
  }
};

export default Issues;
