import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useSelector } from "react-redux";

function EngineeringPage(props) {
    const user = useSelector(state => state.user);

    const titleStyle = {
        position: 'absolute',
        margin: '30px auto auto auto',
        left: '0',
        right: '0',
        width: '120px',
        fontSize: '25px',
        fontWeight: '600',
    }

    const boxStyle= {
        position: 'absolute',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        margin: '90px auto auto auto',
        left: '0',
        right: '0',
        width: '500px',
        height: '660px',
        backgroundColor: '#f3f3f3',
    }

    const floorStyle = {
        position: 'relative',
        margin: '35px auto auto auto',
        left: '0',
        right: '0',
        width: '160px',
    }



    const EonClick = (e) => {
        e.preventDefault();
        if(user.loginSuccess.UserInfo.user_id!==""){
            props.history.push(`/place/engineering/${e.currentTarget.value}F`)
        } else{
            alert('로그인 필요');
            props.history.push('/login');
        }
    }

    return (
        <div>
            <div>
                <span style={titleStyle}>
                    공과대학
                </span>
                <div style={boxStyle}>
                    <Button value='6' style={floorStyle} onClick={EonClick} variant="contained" color="primary" disabled>6층</Button>
                    <Button value='5' style={floorStyle} onClick={EonClick} variant="contained" color="primary" disabled>5층</Button>
                    <Button value='4' style={floorStyle} onClick={EonClick} variant="contained" color="primary" >4층</Button>
                    <Button value='3' style={floorStyle} onClick={EonClick} variant="contained" color="primary" disabled>3층</Button>
                    <Button value='2' style={floorStyle} onClick={EonClick} variant="contained" color="primary" disabled>2층</Button>
                    <Button value='1' style={floorStyle} onClick={EonClick} variant="contained" color="primary" disabled>1층</Button>
                </div>
                <div style={{position: 'absolute', height: '800px', width: '20px'}}/>
            </div>
        </div>
    )
}

export default EngineeringPage
