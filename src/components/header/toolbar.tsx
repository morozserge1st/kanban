import * as React from 'react';
import Button from '../button';
import Profile from './profile';
import AddIcon from './add-icon';

const Toolbar = () => (
  <div className="toolbar">
    <Button
      className="toolbar__button"
    >
      <AddIcon />
      <span>Create new list</span>
    </Button>
    <Profile />
  </div>
);

export default Toolbar;
