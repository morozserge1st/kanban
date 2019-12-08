import * as React from 'react';

export interface InputProps {
  className: string,
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
    const {className} = this.props;
    
    return (
      <form className={className}>
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
