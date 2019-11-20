import * as React from 'react';
import { CardModel } from '../../types/card-model';
import { CardContainer } from '../../containers/card-container';

export interface MainProps {
  items: CardModel[],
  fetching: boolean
};

const Main: React.FunctionComponent<MainProps> = ({
  items,
  fetching
}) => (
  <main className="main">
    {fetching ? (
      null
    ) : (
      <>
        {items.map((item,index) =>
          <CardContainer
            key={item.id}
            index={index}
          />
        )}
      </>
    )}
  </main>
);

export default Main;
