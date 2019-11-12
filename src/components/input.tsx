import * as React from 'react'

interface InputProps {
  onAdd: (value: string) => void
}

class Input extends React.Component<InputProps, any> {
  private inputRef = React.createRef<HTMLInputElement>();

  componentDidMount(){
    this.inputRef.current!.focus();
  }

  onBlur = () => {
    this.props.onAdd(this.inputRef.current!.value);
  }

  render() {
    return (
      <input
        className="input"
        type="text"
        defaultValue=""
        onBlur={this.onBlur}
        ref={this.inputRef}
      />
    );
  }
}

export default Input;
