/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Input from 'common/styled/Input';
import Alert from 'components/Alert';
import CopyURL from 'components/CopyURL';

import { ImagesPath } from 'constants/path';
import { URL, IAlert } from 'constants/types';
import { getURL } from 'utils';
import { topFive, create } from 'services/URLService';

import {
  Container, Header, Content, Footer,
} from './index.styles';

const Landing:React.SFC = () => {
  const path = getURL();

  const [value, setValue] = useState<string>('');
  const [urls, setUrls] = useState<URL[]>([]);
  const [shortURL, setShortURL] = useState<string>('');
  const [alert, setAlert] = useState<IAlert>({ message: '' });

  const handleShortURL = async () => {
    const response = await create({ full: value });

    if (!response) return;

    if (response.error) {
      await setAlert({ message: response.message, type: 'error' });
      return;
    }

    setValue('');
    setShortURL(response.url);
    await setAlert({ message: 'Success shrinking the URL!', type: 'success' });
    await loadURLs();
  };

  const loadURLs = async () => {
    const response = await topFive();

    if (!response) return;

    if (response.error) {
      await setAlert(response.message);
      return;
    }

    setUrls(response.urls);
  };

  useEffect(() => {
    loadURLs();
  }, []);


  const resetAlert = (val: string) => {
    setAlert({ message: val });
  };

  return (
    <Container>
      <Alert message={alert.message} type={alert.type} resetMessage={resetAlert} />
      <CopyURL URL={shortURL} resetURL={setShortURL} />
      <Header>
        <img src={ImagesPath.INTERLINK_LOGO} alt="" />
        <Link to="/analysis">Go to Analysis</Link>
        <div className="form">
          <h1>Shrink you link!</h1>
          <span>A long URL is always a problem. It&apos;s hard to remember and share.</span>
    
          <Input
            value={value}
            onChange={setValue}
            placeholder="Paste the link to shrink it"
            label="SHRINK"
            onClick={handleShortURL}
          />

        </div>
      </Header>
      <Content>
        <h1>Top 5</h1>
        <div className="links-top-5">
          {!!urls && urls.length > 0
            ? urls.map(({ short, clicks }, i) => (
              <div className="link" key={i}>
                <Link to={`${short}`} target="_blank">{`${path}${short}`}</Link>
                <span>{clicks?clicks.length:0}</span>
              </div>
            ))
            : (<h2>Nenhuma URL cadastrada.</h2>)}
        </div>
      </Content>
      <Footer>
        <span>
          Made with
          <img src={ImagesPath.HEART} alt="" />
          by Interlink
        </span>
        <img src={ImagesPath.TWITTER_LOGO} alt="" />
      </Footer>
    </Container>
  );
};

export default Landing;
