import React, {useState,useEffect} from 'react';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import ClearIcon from '@material-ui/icons/Clear';
import axios from "axios";

import {useDispatch} from 'react-redux';
import {popupIn} from "../../../../../../_actions/user_action";
import {popupOut} from "../../../../../../_actions/user_action";

import './Popup.css';
import PopupUser from './PopupUser';

import { useSelector } from "react-redux";


function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog(props) {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  const [open, setOpen] = useState(false);
  const [users, setusers] = useState([]);

  useEffect(async() => {
    const dataall={
      classroom: props.CN,
    }
    const jsonall = JSON.stringify(dataall)

    const userData = await axios.post(
      "/api/popup/userdata",
      jsonall,
      {
        headers:{
          'Content-type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then((res)=>{
          setusers(res.data.userData);
      })
  }, [user.loginSuccess])
  //
  const leftStyle = {
    position: 'absolute',
    left: '50%',
    marginTop: '-10px',
    minHeight: '100%',
    // backgroundColor: '#eeeeee',
    borderRight: '1px solid #bfbfbf'
  }
  //

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // console.log(e.currentTarget.value)


    if(e.currentTarget.value === 'in'){
      if(user.loginSuccess.UserInfo.show==="true" || user.loginSuccess.UserInfo.show===true){
        const dataall = {
          info: `${user.loginSuccess.UserInfo.student_id.substring(2,4)}_${user.loginSuccess.UserInfo.major}`,
          name: user.loginSuccess.UserInfo.name,
          user_id: user.loginSuccess.UserInfo.user_id,
          classroom: props.CN,
          active: true,
        }

        const jsonall = JSON.stringify(dataall)
        const active = true;

        dispatch(popupIn(jsonall, props.CN, active))
        .then((res)=>{
          // console.log(res)
          if(res.payload.result==="in"){
            // 접속자 칸 리렌더링 시켜줘야함
          }else{
              alert("입장 실패");
          }
        })
      }
      else if(user.loginSuccess.UserInfo.show=="false" || user.loginSuccess.UserInfo.show==false){
        const dataall = {
          info: "비공개",
          name: "",
          user_id: user.loginSuccess.UserInfo.user_id,
          classroom: props.CN,
          active: false,
        }

        const jsonall = JSON.stringify(dataall)
        const active = false;

        dispatch(popupIn(jsonall, props.CN, active))
        .then((res)=>{
          // console.log(res)
          if(res.payload.result==="in"){
            // 접속자 칸 리렌더링 시켜줘야함
          }else{
              alert("입장 실패");
          }
        })
      }

      

    }else if(e.currentTarget.value === 'out'){
      const dataall = {
        user_id: user.loginSuccess.UserInfo.user_id,
        classroom: 0,
      }
      const jsonall2 = JSON.stringify(dataall)

      dispatch(popupOut(jsonall2))
      .then((res)=>{
        // console.log(res)
        if(res.payload.result==="out"){
          // 접속자 칸 리렌더링 시켜줘야함
        }else{
            alert("퇴장 실패");
        }
      })

    }
  } 

  const userinfo = users.map((userinfo, id) => 
  <PopupUser key={id} userData={userinfo}/>
  )


  return (
    <div>
      <div style={{position: 'absolute', height: '100%', width: '100%',}}onClick={handleClickOpen}></div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        className="MuiDialog-paperWidthSm"
      >
        <div style={{position: 'absolute', width: '100%', height: '100%',}}>
          <ClearIcon onClick={handleClose} style={{position: 'absolute', right: '1%', top: '1.5%', cursor: 'pointer'}}/>
        </div>
        
        <DialogTitle id="draggable-dialog-title">
          <PersonIcon style={{position: 'relative', marginTop: '5px', height: '40px', width: '40px',}}/>
          <span style={{position: 'absolute', margin: '7px 0 0 15px', fontSize: '23px'}}>{props.CT}</span>
          <span style={{position: 'absolute', right: '70px', marginTop: '10px', fontSize: '19px', color: '#8f8f8f'}}>{props.CN}</span>
        </DialogTitle>
        <DialogContent className="MuiDialogContent-root">
          <div style={leftStyle}/>
          {userinfo}
        </DialogContent>
        <DialogActions className="MuiDialogActions-root">
          {(user.loginSuccess.UserInfo.classroom !== props.CN) &&
            <Button onClick={onSubmitHandler} color="primary" variant="contained" value="in" >
              입장
            </Button>
          }
          {(user.loginSuccess.UserInfo.active === true && user.loginSuccess.UserInfo.classroom === props.CN) &&
            <Button onClick={onSubmitHandler} color="primary" variant="contained" value="out" >
              퇴장
            </Button>
          }
        </DialogActions>
      </Dialog>
    </div>
  );
}