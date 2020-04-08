/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Highlight,
  SearchBox,
} from 'react-instantsearch-dom';
import { Link } from 'react-router-dom';
import { getURL } from 'utils';
import { URLList, URLContainer, URLListContainer } from '../index.styles';


const URLs:React.SFC = () => (
  <URLListContainer>
    <SearchBox />
    <URLList hitComponent={URL} />
  </URLListContainer>
);

function URL(props:any) {
  const path = getURL();
  return (
    <URLContainer>
      <div className="links">
        <Highlight attribute="full" hit={props.hit} />
        <Link to={`${props.hit.short}`} target="_blank">{`${path}/${props.hit.short}`}</Link>
      </div>
      <div className="clicks">
        {`${props.hit.clicks.length} clicks`}
      </div>
    </URLContainer>
  );
}

export default URLs;
