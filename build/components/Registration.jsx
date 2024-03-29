import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { UilLock } from '@iconscout/react-unicons';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from './Theme.jsx';
import { API } from '../../src/api';
import { FacebookButton, GoogleButton } from './modules/LoginButtons';

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  primary: {
    backgroundColor: '#7c4dff !important',
    '&:hover': {
      backgroundColor: '#651fff !important',
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    position: 'absolute',
    marginLeft: '-65px',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
  },
}));

export default function SignUp({ setpage }) {
  const classes = useStyles();
  let handleSignUp = (event) => {
    event.preventDefault();
    let name = event.target[0].value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    API.signup({
      name: name,
      email: email,
      password: password,
    }).then((response) => {
      if (response) {
        setpage('userDashboard');
      }
    });
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Container component="main" style={{ width: '500px' }}>
        <CssBaseline />
        <div className={classes.paper}>
          <img src="../icons/512.png" style={{ height: '100px' }} />
          <Avatar className={classes.avatar}>
            <UilLock />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <div className="button-container">
            <FacebookButton />
            <GoogleButton />
          </div>
          <form
            className={classes.form}
            validate="true"
            onSubmit={handleSignUp}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              type="submit"
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={() => setpage('logIn')} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}
