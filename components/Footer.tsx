import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      textAlign: 'center',
    },
  })
);

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Typography variant="caption" color="textSecondary">
        ©yokotani92 | {new Date().getFullYear()}
      </Typography>
    </footer>
  );
};

export default Footer;
