import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import { fade, makeStyles } from "@material-ui/core/styles";


//redux
import {useDispatch} from 'react-redux';
import {logoutUser} from "../../../_actions/user_action";
import { useSelector } from "react-redux";


const useStyles = makeStyles((theme) => ({
    "@global": {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: "none",
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      minHeight: "52px",
    },
    toolbar: {},
    toolbarTitle: {
      margin: "auto 20px auto 0",
      fontWeight: '600',
    },
    link: {
      margin: "auto 10px auto auto",
    },
    mypage: {
      margin: "auto 10px auto auto",
    }
  }));

function NavBar(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const logoutHandler = async (e) => {
        e.preventDefault();

        const dataAll = {
          user_id: user.loginSuccess.UserInfo.user_id,
          classroom: 0,
        }
        const jsonAll = JSON.stringify(dataAll) 

        dispatch(logoutUser(jsonAll))
        .then((res)=>{
          // console.log(res)
          if(res.payload.result=="NO"){
            document.location.href='/';
          } else{
            alert('로그인 필요');
            document.location.href='/login';
          }
        })
    }

    const classes = useStyles();

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            className={classes.appBar}
            >
            <Toolbar className={classes.toolbar}>
                <Link
                justifyContent="flex-start"
                href="/"
                variant="h5"
                color="inherit"
                noWrap
                className={classes.toolbarTitle}
                >
                홈{/* Home(이미지로 추후 대체) */}
                </Link>
                <nav></nav>
                {(
                  user.loginSuccess.result!=="OK" &&
                  user.loginSuccess.result!=="공개 비공개 변경완료" &&
                  user.loginSuccess.result!=="in" &&
                  user.loginSuccess.result!=="out"
                ) &&
                  <Button
                  href="/login"
                  color="black"
                  variant="outlined"
                  className={classes.link}
                  >
                  로그인
                  </Button>
                }
                {(
                  user.loginSuccess.result==="OK" || 
                  user.loginSuccess.result==="공개 비공개 변경완료" ||
                  user.loginSuccess.result==="in" ||
                  user.loginSuccess.result==="out"
                ) &&
                  <div className={classes.link}>
                    <Button
                    href="/mypage"
                    color="black"
                    variant="outlined"
                    style={{margin: 'auto 20px auto auto'}}
                    >
                    마이페이지
                    </Button>
                    <Button
                    color="black"
                    variant="outlined"
                    
                    onClick={logoutHandler}
                    >
                    로그아웃
                    </Button>
                  </div>
                }
                
                
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
