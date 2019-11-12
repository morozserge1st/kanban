import * as React from 'react';
import dataMock from '../../const/data'
import Card from './card';

interface Issue {
  id: number,
  name: string
}

interface Task {
  title: string,
  issues: Issue[],
}

interface MainState {
  list: Task[]
};

class Main extends React.Component<{}, MainState> {
  state: MainState = {
    list: []
  }

  componentDidMount() {
    this.setState({
      list: dataMock
    });
  }

  onAdd = (value: string) => {
    const issue: Issue = {
      id: Math.random(),
      name: value
    }

    console.log(value);

    this.setState({
      list: this.state.list.map((el, i) => (
        i === 0 ? (
          {
            title: el.title,
            issues: [
              ...el.issues, 
              issue
            ]
          }
        ) : el)
      )
    });
  }

  onMove = (id: number, index: number) => {
    const issue = this.state.list[index - 1].issues.find(x => x.id === id);

    if (issue) {
      this.setState({
        list: this.state.list.map((el, i) => {
          if(i === index - 1) {
            return {
              title: el.title,
              issues: el.issues.filter(x => x.id != id)
            }
          } else if (i === index) {
            return {
              title: el.title,
              issues: [
                ...el.issues, 
                issue
              ]
            }
          }
          return el;
        })
      })  
    }
  }

  render() {
    const {
      list
    } = this.state;

    return (
      <main className="main">
        {list.map((item, index) =>
          <Card
            list={list}
            title={item.title}
            issues={item.issues}
            index={index}
            key={index}
            onAdd={this.onAdd}
            onMove={this.onMove}
          />
        )}
      </main>
    );
  }
};

export default Main;
