import * as React from 'react';
import '../../styles/dialog.scss';
import { CloseButtonContainer, SaveButtonContainer } from './buttons-container';
import { InputContainer } from './input-container';

export interface DialogProps {
  open: boolean
}

const Dialog: React.FunctionComponent<DialogProps> = ({
  open
}) => (
  <>
    {open ? (
      <div className="dialog">
        <div className="dialog__inner">
          <div className="dialog__header">
            Create new list
          </div>
          <div className="dialog__content">
            <InputContainer className="dialog__input"/>
          </div>
          <div className="dialog__action">
            <SaveButtonContainer className="dialog__button">
              Save
            </SaveButtonContainer>
            <CloseButtonContainer className="dialog__button">
              Close
            </CloseButtonContainer>
          </div>
        </div>
      </div>
    ) : null}
  </>
);

export default Dialog;
