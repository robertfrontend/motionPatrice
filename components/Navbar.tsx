import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles';
import { customTheme } from './utils/Theme';



const Nav = styled('nav')(({ theme }) => ({
    padding: '1em 0',
    background: theme.palette.blue01,
    minHeight: '8vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '500',
    color: theme.palette.black,
    fontSize:'1.1em'
}));

export default function Navbar() {
  return (
      <Nav theme={customTheme}>
          <Container maxWidth="xl">
              <Grid container spacing={4}>
                  <Grid item sm={6} style={{ textAlign: 'left' }}>MenuDR</Grid>
                  <Grid item sm={6} style={{ textAlign: 'right' }}>
                      <Grid container
                          direction="row"
                          justifyContent="flex-end"
                          alignItems="flex-end"
                          spacing={4}
                      >
                          <Grid item>Login</Grid>
                          <Grid item>Register</Grid>
                      </Grid>
                  </Grid>
              </Grid>
          </Container>
      </Nav>
  )
}
