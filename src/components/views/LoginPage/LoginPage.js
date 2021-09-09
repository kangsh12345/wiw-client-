import React, {useState, useRef} from 'react'
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

//redux
import {useDispatch} from 'react-redux';
import {loginUser} from "../../../_actions/user_action";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function LoginPage(props) {

  const dispatch = useDispatch();

  const classes = useStyles();

  const IDInput = useRef();
  const PasswordInput = useRef();

  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    
    // console.log(IDInput.current.value, PasswordInput.current.value);
    const dataAll = {
      user_id: IDInput.current.value,
      password: PasswordInput.current.value,
    }
    const jsonAll = JSON.stringify(dataAll) 

    dispatch(loginUser(jsonAll))
    .then((res)=>{
      if(res.payload.result=="OK"){
        props.history.push('/');
      } else{
        alert(res.payload.result);
      }
    })
    
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="user_id"
            label="아이디"
            name="user_id"
            autoComplete="user_id"
            autoFocus
            inputRef={IDInput}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={PasswordInput} 
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            로그인
          </Button>
        
          <Link href="/register" variant="body2" style={{marginLeft: '170px',}}>
            {"회원가입"}
          </Link>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
}
