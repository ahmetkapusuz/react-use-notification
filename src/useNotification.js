import React, { useState, useEffect, useCallback } from 'react';

const useNotification = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log('show: ', show);
  }, [show]);

  const ref = useCallback(
    node => {
      if (node !== null) {
        if (show) {
          node.style.display = 'block';
          const timeout = setTimeout(() => {
            setShow(false);
          }, 2000);
        } else {
          node.style.display = 'none';
        }
      }
    },
    [show]
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
