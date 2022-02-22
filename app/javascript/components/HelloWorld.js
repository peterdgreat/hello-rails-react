import React, {useEffect} from 'react'
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux";
import {fetchGreeting} from "../redux/messages";

export default function HelloWorld() {
  const message = useSelector(state => state.reducerMessage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <div>
       {message.title}
    </div>
  )
}
