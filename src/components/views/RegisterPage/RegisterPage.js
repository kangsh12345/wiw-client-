import React, {useState, useRef} from 'react'
import {Grid, TextField, Input, Button} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import axios from "axios";
import { useAsync } from 'react-async';

import "./RegisterPage.css";

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 18,
      padding: '10px 26px 10px 12px',
      width: '360px',
      textAlign: 'center',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
  
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

function Register() {
    const classes = useStyles();
    const [who, setwho] = useState('')
    const whohandleChange = (e)=>{
        setwho(e.target.value)
    }

    const IDInput = useRef();
    const NameInput = useRef();
    const NumberInput = useRef();
    const PasswordInput = useRef();
    const Password2Input = useRef();


    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (
          IDInput.current.value &&
          NameInput.current.value &&
          NumberInput.current.value &&
          PasswordInput.current.value &&
          Password2Input.current.value &&
          (ChkPassword===false) &&
          (ChkID===false) &&
          (ChkName===false) &&
          (ChkNumber===false) &&
          (ChkPassword===false) &&
          (who !== '')
        ) {
          const dataall = {
            user_id: IDInput.current.value,
            name: NameInput.current.value,
            student_id: NumberInput.current.value,
            password: PasswordInput.current.value,
            belong: who
          }
          const jsonall = JSON.stringify(dataall)


          const AllPost = await axios.post(
            "/api/auth/register",
            jsonall,
            {
              headers:{
                'Content-type': 'application/json',
                'Accept': 'application/json'
              }
            }
          )
          .then(document.location.href='/login')

          // console.log(AllPost)
        }
    }

    const [ChkID, setChkID] = useState(false)
    const [ChkName, setChkName] = useState(false)
    const [ChkNumber, setChkNumber] = useState(false)
    const [ChkPassword, setChkPassword] = useState(false)
    const [ChkPassword2, setChkPassword2] = useState(false)

    const check_num = /[0-9]/
    const check_eng = /[a-zA-Z]/
    const check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
    const check_spc = /[~!@#$%^&*()_+|<>?:{}]/

    const changID = async () => {
      if(IDInput.current.value===""){
        setChkID("아이디를 입력해주세요")
      } else if (IDInput.current.value.length < 4 || IDInput.current.value.length >20) {
        setChkID("아이디는 영어, 숫자 4~20글자만 가능합니다.")
      }
      else{
        const dataID = {ID: IDInput.current.value}
        const jsonID = JSON.stringify(dataID) 


        const IDPost = await axios.post(
          "/api/chkid",
          jsonID,
          {
            headers:{
              'Content-type': 'application/json',
              'Accept': 'application/json'
            }
          }
        );

        // console.log(IDPost);

        if(IDPost.data.Result==="Exist"){
          setChkID("이미 사용중인 ID입니다.")
        }else{
          setChkID(false)
        }
      }
      
    }
    const changName = async () => {
      if(NameInput.current.value===""){
        setChkName("실명를 입력해주세요")
      } else{
        setChkName(false)
      }
    }
    const changNumber = async () => {
      if(NumberInput.current.value===""){
        setChkNumber("학번을 입력해주세요")
      } else if(NumberInput.current.value.length !== 8 || isNaN(NumberInput.current.value)===true){
        setChkNumber("올바른 학번이 아닙니다.")
      } else{
        setChkNumber(false)
      }
    }

    const changPassword = async () => {
      if(PasswordInput.current.value===""){
        setChkPassword("비밀번호를 입력해주세요")
      } else if(PasswordInput.current.value.length < 8 || PasswordInput.current.value.length >20){
        setChkPassword("비밀번호는 8~20글자이여야 합니다.")
      }else{
        setChkPassword(false)
      }
    }
    const changPassword2 = async () => {
      if(Password2Input.current.value===""){
        setChkPassword2("확인 비밀번호를 입력해주세요")
      } else if(Password2Input.current.value !== PasswordInput.current.value){
        setChkPassword2("비밀번호가 일치하지 않습니다.")
      }else{
        setChkPassword2(false)
      }
    }


    

    return (
        <div>
            <div style={{marginTop: '100px',}}/>
            <div style={{BackgroundColor: '#f2f2f2',display: 'flex', alignItems: 'center', flexDirection: 'column', paddingBottom: '64px',}}>
                <form onSubmit={onSubmitHandler}>
                  <Grid container direction="column" justify="center" alignItems="center">
                      <TextField inputRef={IDInput} onBlur={changID} type="text" label="아이디" variant="outlined" style={{width: '400px',marginBottom: '20px'}}/>
                      {ChkID && <span className="errmsg">{ChkID}</span>}
                      <TextField inputRef={NameInput} onBlur={changName} label="실명" variant="outlined" style={{width: '400px',marginBottom: '20px'}}/>
                      {ChkName && <span className="errmsg">{ChkName}</span>}
                      <TextField inputRef={NumberInput} onBlur={changNumber} label="학번 8자리 ex)20191234" variant="outlined" style={{width: '400px',marginBottom: '20px'}}/>
                      {ChkNumber && <span className="errmsg">{ChkNumber}</span>}
                      <TextField inputRef={PasswordInput} onBlur={changPassword} type='password' label="비밀번호" variant="outlined" style={{width: '400px',marginBottom: '20px'}}/>
                      {ChkPassword && <span className="errmsg">{ChkPassword}</span>}
                      <TextField inputRef={Password2Input} onBlur={changPassword2} type='password' label="비밀번호 확인" variant="outlined" style={{width: '400px',marginBottom: '20px'}}/>
                      {ChkPassword2 && <span className="errmsg">{ChkPassword2}</span>}
                      <FormControl className={classes.margin}>
                          <InputLabel id="demo-customized-select-label">소속 선택</InputLabel>
                          <Select
                          labelId="demo-customized-select-label"
                          id="demo-customized-select"
                          value={who}
                          onChange={whohandleChange}
                          input={<BootstrapInput />}
                          >
                          <MenuItem value="">
                              <em>소속 선택</em>
                          </MenuItem>
                          <MenuItem value={'공과대학'}>공과대학</MenuItem>
                          <MenuItem value={'공과대학'}>공과대학</MenuItem>
                          <MenuItem value={'공과대학'}>공과대학</MenuItem>
                          </Select>
                      </FormControl>
                      <Button type="submit" variant="contained" color="primary" style={{marginTop: '20px', width: '390px',}}>회원가입</Button>
                  </Grid>
                </form>
            </div>
        </div>
    )
}

export default Register
