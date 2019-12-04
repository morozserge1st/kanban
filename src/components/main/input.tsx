import * as React from 'react';

export interface InputProps {
  onBlur: (value: string) => void
}

class Input extends React.Component<InputProps> {
  private inputRef = React.createRef<HTMLInputElement>();

  componentDidMount(){
    this.inputRef.current!.focus();
  }

  onBlur = () => {
    this.props.onBlur(this.inputRef.current!.value);
  }

  render() {
    return (
      <form className="wrap">
        <input
          className="input"
          type="text"
          defaultValue=""
          onBlur={this.onBlur}
          ref={this.inputRef}
        />
      </form>
    );
  }
}

export default Input;
