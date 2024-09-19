

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reset } from '../../redux/ScoreSlice';

export default function Photo({src}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleMain = () => {
      dispatch(reset());
      navigate("/")
  }
  return (
    <img src={src} alt="" onClick={handleMain}/>
  )
}
