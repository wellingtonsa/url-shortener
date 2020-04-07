import React, { useState, useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { URL } from 'constants/types';
import { toBar } from 'utils/chart';
import { topFive } from 'services/URLService';
import Chart from 'components/Chart';
import { Container, AlgoliaProvider } from './index.styles';


const Analysis:React.SFC = () => {
  const [urls, setUrls] = useState<URL[]>([]);

  const loadURLs = async () => {
    const response = await topFive();

    if (!response) return;

    setUrls(response.urls);
  };

  useEffect(() => {
    loadURLs();
  }, []);


  const searchClient = algoliasearch(
    'HHZKWC7UIG',
    'e1e4b77d18f82b2aeea66df7b949430f',
  );

  return (
    <AlgoliaProvider
      indexName="urlshortener"
      searchClient={searchClient}
    >
      <Container>
        <header>
          <Chart width={1200} height={400} data={toBar(urls)} type="bar" />
        </header>
      </Container>
    </AlgoliaProvider>
  );
};


export default Analysis;
