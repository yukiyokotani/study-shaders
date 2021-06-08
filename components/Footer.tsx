import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      textAlign: 'center',
    },
    iconContainer: {
      textAlign: 'right',
    },
    icon: {
      margin: '8px 16px 0px 0px',
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.text.primary,
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
  })
);

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Box className={classes.iconContainer}>
        <Box className={classes.icon}>
          <a
            href="https://github.com/yokotani92/study-shaders"
            className={classes.link}
          >
            <GitHubIcon />
          </a>
        </Box>
      </Box>
      <div>
        <Typography variant="caption" color="textSecondary">
          ©yokotani92 | {new Date().getFullYear()}
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
