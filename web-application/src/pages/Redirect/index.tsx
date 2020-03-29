/* eslint-disable consistent-return */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import loadingAnimation from 'assets/animations/loading.json';
import errorAnimation from 'assets/animations/error.json';

import Animation from 'components/Animation';
import { findURL } from 'services/URLService';
import { redirectToExternalURL } from 'utils';
import { Container } from './index.styles';

const Redirect:React.SFC = () => {
  const { shortURL } = useParams();
  const [url, setURL] = useState<string>();
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const find = async () => {
      if (shortURL) {
        const response = await findURL(shortURL);

        if (!response) return;

        if (response.error) {
          setError(response.message);
          return false;
        }
        setURL(response.url);
        redirectToExternalURL(response.url);
      }
    };

    find();
  }, [shortURL]);

  return (
    <Container>
      {!error ? (
        <div>
          <h1>{!url ? 'Checking URL ...' : `Redrecting to ${url}`}</h1>
          <Animation height={300} width={300} animation={loadingAnimation} />
        </div>
      )
        : (
          <div>
            <h1>{error}</h1>
            <Animation height={150} width={150} animation={errorAnimation} loop={false} />
          </div>
        )}
    </Container>
  );
};

export default Redirect;
