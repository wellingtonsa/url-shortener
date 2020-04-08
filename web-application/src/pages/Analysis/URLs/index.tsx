/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Highlight,
  SearchBox,
} from 'react-instantsearch-dom';
import { Link } from 'react-router-dom';
import { URL } from 'constants/types';
import { getURL } from 'utils';
import { URLList, URLContainer, URLListContainer } from '../index.styles';

interface Props {
  onClick(data:URL): void;
}

function URLs({ onClick }:Props) {
  const URLComponent = (props:any) => {
    const path = getURL();

    const handleClick = () => {
      const { full, short, clicks } = props.hit;
      onClick({ full, short, clicks });
    };

    return (
      <URLContainer onClick={handleClick}>
        <div className="links">
          <Highlight attribute="full" hit={props.hit} />
          <Link to={`${props.hit.short}`} target="_blank">{`${path}/${props.hit.short}`}</Link>
        </div>
        <div className="clicks">
          {`${props.hit.clicks.length} clicks`}
        </div>
      </URLContainer>
    );
  };


  return (
    <URLListContainer>
      <SearchBox translations={{ placeholder: 'Search a URL...' }} />
      <URLList hitComponent={URLComponent} />
    </URLListContainer>
  );
}

export default URLs;
