/* eslint-disable react/prop-types */
/* eslint-disable no-empty */
import React, { useState, useEffect } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

function isPromise (obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

const BeforeEnter = (props) => {
  const { beforeEnter, route, ...otherProps } = props;
  const location = useLocation();
  const [completed, setCompleted] = useState(false);
  const [result, setResult] = useState(null);
  useEffect(() => {
    const enter = beforeEnter({ ...props })
    if (isPromise(enter)) {
      enter.then(r => {
        setCompleted(true)
        setResult(r)
      })
    } else {
      setCompleted(true)
      setResult(enter)
    }
  }, [])

  if (completed) {
    if (typeof result === 'string') {
      return <Redirect to={result} {...route} {...otherProps} {...{ from: location.pathname }} />;
    }
    return <route.component {...otherProps} route={route} />
  }
  return null;
}

export default BeforeEnter;