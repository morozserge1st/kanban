import * as React from 'react';
import { CardModel } from '../../types/card-model';
import { CardContainer } from './card-container';
import '../../styles/main/main.scss';

export interface MainProps {
  items: CardModel[],
  fetching: boolean
}

const Main: React.FunctionComponent<MainProps> = ({
  items,
  fetching
}) => (
  <main className="main">
    {fetching ? (
      <div className="card--empty">
        Downloading your list...
      </div>
    ) : (
      <>
        {items.length ? (
          <>
            {items.map((item, index) => (
              <CardContainer
                key={item.id}
                index={index}
              />
            ))}
          </>
        ) : (
          <div className="card--empty">
            Add your first list
          </div>
        )}
      </>
    )}
  </main>
);

export default Main;
