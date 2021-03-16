import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from 'react-share';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    shareButton: {
      display: 'flex',
      justifyContent: 'flex-end',
      '& > *': {
        marginLeft: theme.spacing(1),
      },
    },
    nonOutline: {
      '&:focus': {
        outline: 'none',
      },
    },
  })
);

interface Props {
  title?: string;
  url: string;
}

const ShareButtons: React.FC<Props> = ({ title, url }) => {
  const classes = useStyles();

  return (
    <Box className={classes.shareButton} mt={2} mb={8}>
      <div>
        <TwitterShareButton
          title={title}
          url={url}
          className={classes.nonOutline}
        >
          <TwitterIcon />
        </TwitterShareButton>
      </div>
      <div>
        <FacebookShareButton
          title={title}
          url={url}
          className={classes.nonOutline}
        >
          <FacebookIcon />
        </FacebookShareButton>
      </div>
      <div>
        <LinkedinShareButton
          title={title}
          url={url}
          className={classes.nonOutline}
        >
          <LinkedInIcon />
        </LinkedinShareButton>
      </div>
    </Box>
  );
};

export default ShareButtons;
