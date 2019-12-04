import * as React from 'react';
import Arrow from '../../icons/arrow';
import Avatar from '../../icons/avatar';
import '../../styles/header/profile.scss';

interface ToolbarProps {
  onClick: () => void,
  className: string
}

const Profile: React.FunctionComponent<ToolbarProps> = ({
  onClick,
  className
}) => (
  <div
    className="profile"
    onClick={onClick}
  >
    <Avatar />
    <Arrow className={className} />
  </div>
);

export default Profile;
