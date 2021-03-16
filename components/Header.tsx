import React from 'react';
// import Link from 'next/link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import ThemeSwitch from '../features/theme/ThemeSwitch';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(4),
    },
    title: {
      marginRight: theme.spacing(4),
    },
    menu: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'space-between',
    },
    toolBar: {
      '& > *': {
        marginRight: theme.spacing(1),
      },
    },
  })
);

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} color="transparent">
        <ToolBar>
          <Typography variant="h4" className={classes.title}>
            Study Shaders
          </Typography>
          <div className={classes.menu}>
            <div className={classes.toolBar}>
              {/* <Link href="/" passHref>
                <Button component="a" color="inherit">
                    Home
                </Button>
              </Link> */}
            </div>
            <ThemeSwitch />
          </div>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default Header;
