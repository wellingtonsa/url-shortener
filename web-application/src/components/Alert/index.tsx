import React, { useEffect, useState } from 'react';
import { Container } from './index.styles';

enum TypeAlert{
    success = '#88ff66',
    warning = '#ffff3f',
    error = '#f6435d'
}

interface Props {
    message: string;
    resetMessage(value: string): void;
    type?: 'success' | 'warning' | 'error';
  }


function Alert({
  message, resetMessage, type = 'success',
}:Props): React.ReactElement {
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    setShow(message !== '');
    setTimeout(() => {
      setShow(false);
      resetMessage('');
    }, 8000);
  }, [message, resetMessage]);

  return (
    <Container background={TypeAlert[type]} show={show}>
      <div className="type" />
      <p>{message}</p>
    </Container>
  );
}

export default Alert;
