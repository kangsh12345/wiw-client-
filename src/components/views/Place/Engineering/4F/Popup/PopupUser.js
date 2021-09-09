import React, {useRef} from 'react'
import { useSelector } from "react-redux";
import axios from 'axios';
import { TextField } from '@material-ui/core';

function PopupUser(props) {
    const user = useSelector(state => state.user);

    const TextInput = useRef();

    console.log(props.userData);

    const inputStyle = {
        position: 'relative',
        float: 'left',
        // backgroundColor: '#eeeeee',
        width: '50%',
        height: '60px',
        marginTop: '-10px',
      }
    
      const inputBox = {
        position: 'absolute',
        height: '50px',
        width: '94%',
        top: '50%',
        padding: '10px 3%',
        transform: 'translate(0%, -50%)',
        // backgroundColor: '#f2f2f2',
        overflow: 'hidden',
      }
      const TextBlur = async () =>{
        const dataID = {
            user_id: user.loginSuccess.UserInfo.user_id,
            text: TextInput.current.value
        }
        const jsonID = JSON.stringify(dataID) 

        const TextRequest = await axios.post(
          "/api/popup/text",
          jsonID,
          {
            headers:{
              'Content-type': 'application/json',
              'Accept': 'application/json'
            }
          }
        )
        .then((res)=>{
            console.log(res);
            props.userData.text=TextInput.current.value
        })
      }

    return (
        <div style={inputStyle}>
            <div style={inputBox}>
                {(props.userData.user_id !== user.loginSuccess.UserInfo.user_id)  &&
                  <div style={{
                      position: 'relative',
                      float: 'left',
                      height: '10px',
                      width: '10px',
                      backgroundColor: '#00e649',
                      borderRadius: '20px', 
                      top: '42%',
                      marginRight: '9px',
                      cursor: 'pointer',
                  }}/>
                }
                { (props.userData.user_id === user.loginSuccess.UserInfo.user_id)  &&
                  <div style={{
                    position: 'relative',
                    float: 'left',
                    height: '10px',
                    width: '10px',
                    backgroundColor: '#00b4e6',
                    borderRadius: '20px', 
                    top: '42%',
                    marginRight: '9px',
                    cursor: 'pointer',
                  }}/>
                }
                <span style={{position: 'relative', float: 'left', top: '27%', marginRight: '4px', width: '43%', height: '24px', overflow: 'hidden' }}>{props.userData.info}
                    <span style={{position: 'absolute', top: '3px',
                    width: '1.5px',
                    height: '18px',
                    backgroundColor: '#8a8a8a',
                    marginLeft: '5px',
                    borderRadius: '2px',
                    marginRight: '5px',
                    }}/>
                    <span style={{marginRight: '12px',}}/>{props.userData.name}
                </span>
                {(props.userData.user_id !== user.loginSuccess.UserInfo.user_id || props.userData.active === false)  &&
                <span style={{position: 'relative',float: 'left', top: '27%', marginLeft: '15px', width: '44%', height: '24px', overflow: 'hidden', backgroundColor: '#f9f9f9', padding: '0px 7px'}}>
                    {props.userData.text===null ? "" : props.userData.text}
                </span>
                }
                { (props.userData.user_id === user.loginSuccess.UserInfo.user_id && props.userData.active === true)  &&
                    <TextField inputRef={TextInput} onBlur={TextBlur} style={{position: 'relative',float: 'left', top: '21%', marginLeft: '15px', width: '44%', height: '24px', overflow: 'hidden',cursor: 'pointer', backgroundColor: '#f9f9f9', border: '0.5px solid #bababa', padding:'0 7px'}}
                     placeholder={props.userData.text}
                    />
                }
            </div>
        </div>
    )
}

export default PopupUser
