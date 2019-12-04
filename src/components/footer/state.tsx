import * as React from 'react';

export interface StateProps {
  active: number,
  finished: number
}

const State: React.FunctionComponent<StateProps> = ({
  active,
  finished
}) => (
  <ul className="state">
    <li className="state__item">
      Active tasks: {active}
    </li>
    <li className="state__item">
      Finished tasks: {finished}
    </li>
  </ul>
);

export default State;
