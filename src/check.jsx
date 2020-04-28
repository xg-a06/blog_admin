import React from 'react';

const fetchInfo = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 4000)
  );
};

let cache = false;
const Check = () => {
  if (!cache) {
    cache = true;
    const promise = fetchInfo();
    throw promise; // Let suspense know
  }
  return null;
};

export default Check;
