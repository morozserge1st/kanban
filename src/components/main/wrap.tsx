import * as React from 'react'
import Input from '../input';
import Select from './select';

type WrapProps = {
  list: any,
  className: string,
  index: number,
  onAdd: (value: string) => void,
  onMove: (id: number) => void
}

const Wrap: React.FunctionComponent<WrapProps> = ({
  className,
  index,
  onAdd,
  onMove,
  list
}) => (
  <div 
    className={className}
  >
    {index === 0 ? (
      <Input
        onAdd={onAdd}
      />
    ) : (
      <Select
        onMove={onMove}
        list={list}
        index={index}
      />
    )}
  </div>
)

export default Wrap;
