import React from "react";
import { Menu, MenuItem } from "@material-ui/core";

interface ProfileMenuProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ anchorEl, handleClose }) => (
  <Menu
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={handleClose}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
  >
    <MenuItem onClick={handleClose}>Profile</MenuItem>
    <MenuItem onClick={handleClose}>My account</MenuItem>
    <MenuItem onClick={handleClose}>Logout</MenuItem>
  </Menu>
);

export default ProfileMenu;
