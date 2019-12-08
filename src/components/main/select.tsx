import * as React from 'react';
import { IssueModel } from '../../types/issue-model';

export interface SelectProps {
  issues: IssueModel[],
  className: string,
  onClose: (id: number) => void
}

class Select extends React.Component<SelectProps> {
  private inputRef = React.createRef<HTMLSelectElement>();

  componentDidMount(){
    this.inputRef.current!.focus();
  }

  onBlur = () => {
    const input = this.inputRef.current!;
    this.props.onClose(Number(input[input.selectedIndex].id));
  }

  render() {
    const {
      issues,
      className
    } = this.props;

    return (
      <form className={className}>
        <select
          name=""
          id=""
          className="select"
          onBlur={this.onBlur}
          ref={this.inputRef}
        >
          <option key="0"></option>
          {issues.map((x: any) => (
            <option id={x.id} key={x.id}>{x.name}</option>
          ))}
        </select>
      </form>
    );
  }
}

export default Select;
