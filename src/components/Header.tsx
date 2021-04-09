import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Container, responsive } from 'styled-minimal';

import { appColor, headerHeight, spacer } from 'modules/theme';

import { logOut } from 'actions';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function Header() {
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(logOut());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Photos
        </Typography>
        {auth && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
