import React, {useState, useEffect} from 'react'
import test from './images/이미지 8.png'
import E4F from './images/E4F.jpg'
import ClearIcon from '@material-ui/icons/Clear';
import Popup from './Popup/Popup';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core'
import { useSelector } from "react-redux";


function F4(props) {
    const user = useSelector(state => state.user);

    const [data, setdata] = useState(0);
    const [open, setopen] = useState(false);

    useEffect(async () => {
        const people = await axios.get("/api/popup/people")
            .then((res)=>{
                setdata(res.data);
            })
    }, [user.loginSuccess])


    const boxStyle = {
        position: 'absolute',
        margin: '8% auto auto auto',
        left: '0',
        right: '0',
        width: '70%',
        height: '60%',
    }
    const box2Style = {
        position: 'absolute',
        margin: '8.15% auto auto auto',
        left: '-2px',
        right: '0',
        width: '69.6%',
        height: '59.4%',
        // backgroundColor: '#eeeeee',
        // border: '1px solid'
    }

    const E9443Style = {
        position: 'absolute',
        top: '40.5%',
        left: '-0.1%',
        width: '21.1%',
        height: '36.8%',
        cursor: 'pointer',
        // backgroundColor: '#eeeeee',
    }
    const E9428Style = {
        position: 'absolute',
        top: '40.5%',
        left: '79%',
        width: '21.1%',
        height: '36.8%',
        cursor: 'pointer',
        // backgroundColor: '#eeeeee',
    }
    const E9429Style = {
        position: 'absolute',
        top: '76.6%',
        left: '74.2%',
        width: '25.9%',
        height: '22.7%',
        cursor: 'pointer',
        // backgroundColor: '#eeeeee',
    }
    const E9425Style = {
        position: 'absolute',
        top: '0.2%',
        left: '79.2%',
        width: '20.7%',
        height: '40.5%',
        cursor: 'pointer',
        // backgroundColor: '#eeeeee',
    }
    const classroom = {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '20px',
        fontWeight: '600',
    }
    const hmany = {
        position: 'absolute',
        height: '11px',
        width: '11px',
        top: '59.7%',
        left: '42%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#00e649',
        borderRadius: '20px', 
        marginRight: '9px',
        cursor: 'pointer',
    }
    const many = {
        position: 'absolute',
        top: '58.7%',
        left: '58%',
        transform: 'translate(-50%, -50%)',
        fontSize: '20px',
        width: '16%',
        textAlign: 'center',
        // backgroundColor: '#eeeeee',
    }

    if(data.data9443){
    return (
        <div>
            <span style={{position: 'absolute',margin: '3% 0 0 4%'}}>공과대학 4층</span>
            <ClearIcon style={{position: 'absolute', margin: '3% 0 0 85%', cursor: 'pointer',}}
                onClick={()=>{
                    props.history.push('/place/engineering')
                }}
            />
            <img style={boxStyle} src={E4F}/>
            <div style={box2Style}>
                <div style={E9443Style}>
                    <span style={classroom}>9443</span>
                    <div style={hmany}/>
                    <span style={many}>{data.data9443.count}</span>
                    <Popup CN='9443' CT={data.data9443.count}/>
                </div>
                
                <div style={E9428Style}>
                    <span style={classroom}>9428</span>
                    <div style={hmany}/>
                    <span style={many}>{data.data9428.count}</span>
                    <Popup CN='9428' CT={data.data9428.count}/>
                </div>
                <div style={E9429Style}>
                    <span style={classroom}>9429</span>
                    <div style={hmany}/>
                    <span style={many}>{data.data9429.count}</span>
                    <Popup CN='9429' CT={data.data9429.count}/>
                </div>
                <div style={E9425Style}>
                    <span style={classroom}>9425</span>
                    <div style={hmany}/>
                    <span style={many}>{data.data9425.count}</span>
                    <Popup CN='9425' CT={data.data9425.count}/>
                </div>
            </div>
        </div>
    )
    } else{
        return(<CircularProgress style={{position:'absolute', margin:'auto', left: '0', right: '0', top: '0', bottom: '0',}} />)
    }
}

export default F4