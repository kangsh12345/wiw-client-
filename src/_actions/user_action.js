import axios from 'axios';
import {
    LOGIN_USER,
    LOGOUT_USER,
    SHOWCHANGE,
    POPUPIN,
    POPUPOUT,
} from './types';

export async function loginUser(dataToSubmit){

    const request = await axios.post(
      "/api/auth/login",
      dataToSubmit,
      {
        headers:{
          'Content-type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )

    // console.log(request);
    return {
        type: LOGIN_USER,
        payload: request.data
    }
    
}

export async function logoutUser(dataToSubmit){
  const request = await axios.post(
    "/api/auth/logout",
    dataToSubmit,
    {
      headers:{
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }
  )

  return {
      type: LOGOUT_USER,
      payload: request.data
  }
}


export async function showChange(dataToSubmit, Show){
  const request = await axios.post(
    "/api/show",
    dataToSubmit,
    {
      headers:{
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }
  )
  console.log(Show);

  return {
      type: SHOWCHANGE,
      payload: request.data,
      show: Show
  }
  
}

export async function popupIn(dataToSubmit, classroom, active){
  const request = await axios.post(
    "/api/popup/in",
    dataToSubmit,
    {
      headers:{
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }
  )

  return {
      type: POPUPIN,
      payload: request.data,
      active: true,
      classroom: classroom
  }
}

export async function popupOut(dataToSubmit){
  const request = await axios.post(
    "/api/popup/out",
    dataToSubmit,
    {
      headers:{
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }
  )

  return {
      type: POPUPOUT,
      payload: request.data,
      active: false,
      classroom: 0
  }
}