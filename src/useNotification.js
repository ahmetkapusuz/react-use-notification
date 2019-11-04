import React, { useState, useEffect, useCallback } from 'react';

const useNotification = (config = {}) => {
  const [show, setShow] = useState(false);
  const { closeTimeout = 3000, autoClose = true } = config;

  useEffect(() => {
    console.log('show: ', show);
  }, [show]);

  const ref = useCallback(
    node => {
      let timeout = null;
      if (node !== null) {
        if (show) {
          node.style.display = 'block';
          timeout = setTimeout(() => {
            setShow(false);
          }, closeTimeout);
        } else {
          node.style.display = 'none';
          clearTimeout(timeout);
        }
      }
    },
    [show, closeTimeout]
  );

  return [
    ref,
    show,
    val => {
      setShow(val);
    },
  ];
};

export default useNotification;
