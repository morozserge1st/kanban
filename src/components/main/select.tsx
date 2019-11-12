import * as React from 'react'

type SelectProps = {
  onMove: (id: number) => void,
  index: number,
  list: any
}

class Select extends React.Component<SelectProps>{
  private inputRef = React.createRef<HTMLSelectElement>();

  componentDidMount(){
    this.inputRef.current!.focus();
  }

  onBlur = () => {
    const input = this.inputRef.current!
    this.props.onMove(Number(input[input.selectedIndex].id));
  }

  render() {
    const {
      list,
      index
    } = this.props;
    console.log(list[index - 1])
    return (
      <select
        name=""
        id=""
        className='select'
        onBlur={this.onBlur}
        ref={this.inputRef}
      >
        <option key="0"></option>
        {list[index - 1].issues.map((x: any) => {
          return <option id={x.id} key={x.id}>{x.name}</option>
        }
        )}
      </select>
    );
  }
}

export default Select;
