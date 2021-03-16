import { Container, Grid, makeStyles, createStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Image001 from '../components/images/Image001';
import Image002 from '../components/images/Image002';
import Image003 from '../components/images/Image003';
import Image004 from '../components/images/Image004';
import Image005 from '../components/images/Image005';
import Image006 from '../components/images/Image006';
import Layout from '../components/Layout';

const useStyles = makeStyles(() =>
  createStyles({
    image: {
      '& > div': {
        width: 300,
        height: 300,
        maxWidth: 300,
        maxHeight: 300,
        marginTop: '1rem',
        marginBottom: '1rem',
      },
    },
    title: {
      width: '100%',
    },
  })
);

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <Layout title="Study Shaders">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xl={12} xs={12}>
            <Typography variant="h1">Examples</Typography>
          </Grid>
          <Grid item xl={12} xs={12}>
            <Typography variant="body1">
              Examples on this page are based on the awesome textbook: &quot;The
              Book of Shaders&quot;
            </Typography>
          </Grid>
          <Grid
            item
            lg={3}
            md={4}
            xs={6}
            className={classes.image}
            container
            justify="center"
          >
            <Image001 />
            <Typography
              display="block"
              variant="subtitle2"
              align="center"
              className={classes.title}
            >
              Image001
            </Typography>
          </Grid>
          <Grid
            item
            lg={3}
            md={4}
            xs={6}
            className={classes.image}
            container
            justify="center"
          >
            <Image002 />
            <Typography
              display="block"
              variant="subtitle2"
              align="center"
              className={classes.title}
            >
              Image002
            </Typography>
          </Grid>
          <Grid
            item
            lg={3}
            md={4}
            xs={6}
            className={classes.image}
            container
            justify="center"
          >
            <Image003 />
            <Typography
              display="block"
              variant="subtitle2"
              align="center"
              className={classes.title}
            >
              Image003
            </Typography>
          </Grid>
          <Grid
            item
            lg={3}
            md={4}
            xs={6}
            className={classes.image}
            container
            justify="center"
          >
            <Image004 />
            <Typography
              display="block"
              variant="subtitle2"
              align="center"
              className={classes.title}
            >
              Image004
            </Typography>
          </Grid>
          <Grid
            item
            lg={3}
            md={4}
            xs={6}
            className={classes.image}
            container
            justify="center"
          >
            <Image005 />
            <Typography
              display="block"
              variant="subtitle2"
              align="center"
              className={classes.title}
            >
              Image005
            </Typography>
          </Grid>
          <Grid
            item
            lg={3}
            md={4}
            xs={6}
            className={classes.image}
            container
            justify="center"
          >
            <Image006 />
            <Typography
              display="block"
              variant="subtitle2"
              align="center"
              className={classes.title}
            >
              Image006
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default HomePage;
