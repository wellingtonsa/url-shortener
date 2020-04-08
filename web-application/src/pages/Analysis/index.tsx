import React, { useState, useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { URL } from 'constants/types';
import { toBar, toCalendar } from 'utils/chart';
import { topFive } from 'services/URLService';
import Chart from 'components/Chart';
import { useWindowSize } from 'react-dooks';
import { ImagesPath } from 'constants/path';
import { Container, AlgoliaProvider } from './index.styles';
import URLs from './URLs';


const Analysis:React.SFC = () => {
  const [urls, setUrls] = useState<URL[]>([]);
  const [url, setUrl] = useState<URL>();

  const { width } = useWindowSize();

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
          <h1>Total clicks in your URLs</h1>
          <img src={ImagesPath.INTERLINK_LOGO} alt="" />
          <Chart width={width - 50} height={400} data={toBar(urls)} type="bar" />
        </header>
        <div className="content">
          <URLs onClick={setUrl} />
          {url && (<Chart width={width - (width / 2)} height={400} data={toCalendar([url])} type="calendar" />)}
        </div>
      </Container>
    </AlgoliaProvider>
  );
};


export default Analysis;
