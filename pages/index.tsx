import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Navbar from '../components/Navbar';
import { customTheme } from '../components/utils/Theme';
import { ThemeProvider } from '@emotion/react';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Practicando</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <ThemeProvider theme={customTheme}>
        <Content >
          <Container maxWidth="lg"
            style={{ padding: '1em 0' }}
            className="home"
          >
            <Section1>
              <Grid container spacing={4}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item sm={4}>
                  <Title
                  >
                    Show the complete menu of your business to your customers.🚀
                  </Title>
                  <Description>
                    Creating a professional digital menu for your business has never been so easy.
                  </Description>
                  <Button>
                    Star for free
                  </Button>
                </Grid>
                <Grid item sm={8}>
                  <Grid container spacing={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item textAlign="center">
                      <ImageMia
                        src={'https://i.postimg.cc/RhH9Rxgr/Device-1.png'}

                      />
                    </Grid>
                    <Grid item textAlign="center">
                      <ImageMia
                        src={'https://i.postimg.cc/qvjRg0YQ/Device-2.png'}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Section1>
          </Container>
        </Content>
      </ThemeProvider>
    </div >
  )
}

const Content = styled('main')(({ theme }) => ({
  background: theme.palette.blue01,
  minHeight: '100vh',
}));

const Section1 = styled('main')(({ theme }) => ({
  padding: '5em 0'
}));

const ImageMia = styled('img')(({ theme }) => ({
  width: '200px'
}));

const Title = styled('h1')(({ theme }) => ({
  fontSize: '2.4em',
  color: theme.palette.black,
  fontWeight: 'bold'
}));

const Description = styled('p')(({ theme }) => ({
  fontSize: '1.2em',
  color: theme.palette.black,
  fontWeight: 'bold',
}));

const Button = styled('button')(({ theme }) => ({
  fontSize: '1em',
  color: theme.palette.black,
  fontWeight: 'bold',
  padding: '0.8em 2em',
  border: 'none',
  background: theme.palette.violet,
  color: 'white',
  borderRadius: '20px'
}));
export default Home
