import { Container, Grid, makeStyles, createStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Image001 from '../components/images/Image001/Image001';
import Image002 from '../components/images/Image002/Image002';
import Image003 from '../components/images/Image003/Image003';
import Image004 from '../components/images/Image004/Image004';
import Image005 from '../components/images/Image005/Image005';
import Image006 from '../components/images/Image006/Image006';
import Image007 from '../components/images/Image007/Image007';
import Layout from '../components/Layout';

const useStyles = makeStyles(() =>
  createStyles({
    contaienr: {
      marginBottom: '24px',
    },
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

const images = [
  <Image001 />,
  <Image002 />,
  <Image003 />,
  <Image004 />,
  <Image005 />,
  <Image006 />,
  <Image007 />,
];

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <Layout title="Study Shaders">
      <Container maxWidth="xl">
        <Grid container spacing={2} className={classes.contaienr}>
          <Grid item xl={12} xs={12}>
            <Typography variant="h1">Examples</Typography>
          </Grid>
          <Grid item xl={12} xs={12}>
            <Typography variant="body1">
              Examples on this page are based on the awesome textbook: &quot;The
              Book of Shaders&quot;
            </Typography>
          </Grid>
          {images.map((image, index) => (
            <Grid
              item
              lg={3}
              md={4}
              xs={6}
              className={classes.image}
              container
              justify="center"
            >
              {image}
              <Typography
                display="block"
                variant="subtitle2"
                align="center"
                className={classes.title}
              >
                {`Image${`000${index + 1}`.slice(-3)}`}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default HomePage;
