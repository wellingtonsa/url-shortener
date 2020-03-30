import React, { useEffect, useState } from 'react';
import { Container } from './index.styles';
import { copyURLToClipBoard, getURL } from 'utils';

interface Props {
    URL: string;
    resetURL(value: string): void;
  }


function CopyURL({
resetURL, URL
}:Props): React.ReactElement {

  const path = getURL();

  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    setShow(URL !== '');

  }, [URL, resetURL]);

  const copyURL = () => {
    copyURLToClipBoard();
    resetURL('');
  }

  return (
    <Container show={show}>
      <span>Your short URL:</span>
      <div className="copy-box">
        <input type="text" value ={`${path}${URL}`}id="shortURL" contentEditable={false}/>
        <button onClick={copyURL}>Copy URL</button>
      </div>

    </Container>
  );
}

export default CopyURL;
