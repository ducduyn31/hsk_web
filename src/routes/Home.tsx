import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, makeStyles } from '@material-ui/core';
import { Container, Text } from 'styled-minimal';

import { login } from 'actions';

import Icon from 'components/Icon';

const useStyles = makeStyles({
  image: {
    maxWidth: '500px',
  },
  button: {
    width: '250px',
    height: '60px',
    borderRadius: '5em',
    fontWeight: 'bolder',
    fontSize: '2em',
  },
});

function Home() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClickLogin = () => {
    dispatch(login());
  };

  return (
    <Container fullScreen>
      <img
        className={classes.image}
        src={`${process.env.PUBLIC_URL}/media/images/mascot.png`}
        alt="Chebi Chat"
      />
      <Button
        onClick={handleClickLogin}
        variant="outlined"
        className={classes.button}
        color="primary"
      >
        <Icon name="sign-in" />
        <Text ml={2}>开始</Text>
      </Button>
    </Container>
  );
}

export default Home;
