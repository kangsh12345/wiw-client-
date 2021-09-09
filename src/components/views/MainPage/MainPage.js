import { Button } from '@material-ui/core'
import React from 'react'

function MainPage(props) {

    const buttonBoxStyle= {
        position: 'absolute',
        margin: '7% auto auto auto',
        left: '0',
        right: '0',
        width: '800px',
        height: '405px',
        backgroundColor: '#fcfcfc',
        border: '1px solid #eeeeee',
    }
    const leftBox = {
        position: 'absolute',
        width: '50%',
        height: '100%',
        // backgroundColor: '#eeeeee',
    }
    const rightBox = {
        position: 'absolute',
        marginLeft: '50%',
        width: '50%',
        height: '100%',
        // backgroundColor: '#eeeeee',
    }

    const fbStyle = {
        position: 'absolute',
        margin: '10% auto auto auto',
        left: '0',
        right: '0',
        width: '40%',
    }
    const sbStyle = {
        position: 'absolute',
        margin: '34% auto auto auto',
        left: '0',
        right: '0',
        width: '40%',
    }
    const tbStyle = {
        position: 'absolute',
        margin: '58% auto auto auto',
        left: '0',
        right: '0',
        width: '40%',
    }
    const frbStyle = {
        position: 'absolute',
        margin: '82% auto auto auto',
        left: '0',
        right: '0',
        width: '40%',
    }

    const lfonClick = (e) => {
        e.preventDefault();
        props.history.push('/place/engineering')
    }

    return (
        <div>
            <div style={buttonBoxStyle}>
                <div style={leftBox}>
                    <Button onClick={lfonClick} variant="contained" color="primary" style={fbStyle}>공과대학</Button>
                    <Button variant="contained" color="primary" style={sbStyle} disabled>자연과학관</Button>
                    <Button variant="contained" color="primary" style={tbStyle} disabled>유니토피아관</Button>
                    <Button variant="contained" color="primary" style={frbStyle} disabled>학예관</Button>
                </div>
                <div style={rightBox}>
                    <Button variant="contained" color="primary" style={fbStyle} disabled>인문과학관</Button>
                    <Button variant="contained" color="primary" style={sbStyle} disabled>의료과학관</Button>
                    <Button variant="contained" color="primary" style={tbStyle} disabled>멀티미디어관</Button>
                    <Button variant="contained" color="primary" style={frbStyle} disabled>교육과학관</Button>
                </div>
            </div>
        </div>
    )
}

export default MainPage
