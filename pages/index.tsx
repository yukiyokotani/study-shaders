import { Container, Grid, makeStyles, createStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Image001 from '../components/Image/Image001';
import Image002 from '../components/Image/Image002';
import Image003 from '../components/Image/Image003';
import Layout from '../components/Layout';

const useStyles = makeStyles(() =>
  createStyles({
    image: {
      '& > div': {
        width: 300,
        height: 300,
        maxWidth: 300,
        maxHeight: 300,
        marginBottom: '1rem',
      },
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
          <Grid
            item
            xl={3}
            md={4}
            xs={6}
            className={classes.image}
            container
            justify="center"
          >
            <Image001 />
            <div>
              <Typography variant="subtitle2" align="center">
                Image001
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            xl={3}
            md={4}
            xs={6}
            className={classes.image}
            container
            justify="center"
          >
            <Image002 />
            <div>
              <Typography variant="subtitle2" align="center">
                Image002
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            xl={3}
            md={4}
            xs={6}
            className={classes.image}
            container
            justify="center"
          >
            <Image003 />
            <div>
              <Typography variant="subtitle2" align="center">
                Image003
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default HomePage;
