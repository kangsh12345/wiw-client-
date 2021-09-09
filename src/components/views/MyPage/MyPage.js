import React, {useState} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import profile from "./images/profile.jpg";

import { useSelector } from "react-redux";
import { Button } from '@material-ui/core';
import axios from 'axios';


//redux
import {useDispatch} from 'react-redux';
import {showChange} from "../../../_actions/user_action";


function MyPage(props) {

    const dispatch = useDispatch();

    const user = useSelector(state => state.user);

    const [Show, setShow] = useState(String(user.loginSuccess.UserInfo.show));


    // css part
    const imgStyle = {
        position: 'absolute',
        marginTop: '60px',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: '0',
        right: '0',
        width: '150px',
        height: '150px',
        border: '1px solid #a6a6a6',
    }
    const nameStyle = {
        position: 'absolute',
        marginTop: '230px',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: '0',
        right: '0',
        width: '400px',
        textAlign: 'center',
        fontSize: '25px',
        fontWeight: '600',
    }
    const majorStyle = {
        position: 'absolute',
        marginTop: '280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: '0',
        right: '0',
        width: '400px',
        textAlign: 'center',
        fontSize: '20px',
    }
    //

    const handleShow = (e) =>{
        setShow(e.target.value);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if(Show==='true'){
            setShow(true);
        }else if(Show=='false'){
            setShow(false);
        }

        const dataall = {
            user_id: user.loginSuccess.UserInfo.user_id,
            show: Show,
            info: `${user.loginSuccess.UserInfo.student_id.substring(2,4)}_${user.loginSuccess.UserInfo.major}`,
            name: user.loginSuccess.UserInfo.name,
        }

        const jsonall = JSON.stringify(dataall)
        console.log(jsonall)


        dispatch(showChange(jsonall, Show))

          .then((res)=>{
            // console.log(res.show)
            if(res.payload.result==="공개 비공개 변경완료"){
                alert("변경 저장 완료");
            }else{
                alert("변경 실패");
            }
            props.history.push('/mypage')
          })
        
         
    }


    return (
        <div>
            <img style={imgStyle} src={profile}/>
            <div style={nameStyle}>{user.loginSuccess.UserInfo.name}</div>
            <div style={majorStyle}>{user.loginSuccess.UserInfo.major} ({user.loginSuccess.UserInfo.belong})</div>
            <form onSubmit={onSubmitHandler}
                style={{position: 'absolute', margin: '360px auto auto auto',left: '0', right: '0', width: '600px', textAlign: 'center',}}>
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="position" name="position" defaultValue={Show} onChange={handleShow}>
                        <FormControlLabel value='true' control={<Radio style={{marginLeft: '15px'}} />} label="공개" />
                        <FormControlLabel value='false' control={<Radio style={{marginLeft: '30px'}} />} label="비공개" />
                    </RadioGroup>
                </FormControl>
                <Button type="submit" variant="outlined" style={{position: 'absolute', margin: '60px auto auto auto', left: '0', right: '0',}}>저장</Button>
            </form>

        </div>
    )
}

export default MyPage
