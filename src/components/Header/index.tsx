import React, { useState } from "react";
import { Box, AppBar, Toolbar, Button, IconButton } from "@material-ui/core";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import PersonIcon from "@material-ui/icons/Person";
import ProfileMenu from "components/ProfileMenu";
import { useDispatch } from "react-redux";
import { openDialog } from "store/dialog/actions";

interface HeaderProps {
  openDialog: () => void;
}

const Header: React.FC<HeaderProps> = ({ openDialog }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);

  return (
    <AppBar component="header" color="default">
      <Toolbar>
        <Box flex={1}>
          <FormatListBulletedIcon fontSize="large" color="primary" />
        </Box>

        <Box>
          <Button variant="outlined" color="primary" onClick={openDialog}>
            Создать лист
          </Button>
          <IconButton color="default" onClick={handleClick}>
            <PersonIcon fontSize="large" color="primary" />
          </IconButton>
          {isOpen && (
            <ProfileMenu anchorEl={anchorEl} handleClose={handleClose} />
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default function () {
  const dispatch = useDispatch();

  return <Header openDialog={() => dispatch(openDialog())} />;
}
