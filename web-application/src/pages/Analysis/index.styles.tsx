import styled from 'styled-components';

import {
  InstantSearch,
  Hits,
} from 'react-instantsearch-dom';

export const AlgoliaProvider = styled(InstantSearch)`


`;
export const Container = styled.div`
  
  header {
    display: flex;
    position: relative;
    flex-direction: column;
    background-image:  linear-gradient(to right, #010932ff,  #03183dff);
    width: 100%;
    justify-content: center;
    align-items: center;

    h1 {
      width: 100%;
      font-weight: 400;
      font-size: 22px;
      text-align: center;
      padding: 20px 40px;
    }

    img {
    position: absolute;
    width: 180px;
    height: 120px;
    top: 2%;
    left: 4%;

    @media(max-width: 650px){
      top: 0.15%;
      left: 0.5%;
      width: 140px;
      height: 100px;
    }
  }
  }

  .content {
    display: flex;
    flex: 1;
    width: 100%;
  }

`;

export const URLList = styled(Hits)`

`;

export const URLListContainer = styled.div`
  background: #fafafa;
  border-right: 1px solid #ddd;
  height: 100%;

  .ais-Hits {
    width: 400px;
    max-height: 425px;
    overflow: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #ddd; 
  }
  
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

  }

  .ais-SearchBox {
    max-width: 400px;
    position: relative;
    border: 1px solid #ddd;

    .ais-SearchBox-input {
      width: 90%;
      height: 40px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;  
      border: 0;
      font-size: 16px;
      padding-left: 20px;
      color: #605c5c;
    }

    .ais-SearchBox-reset{
      position: absolute;
      right: 11%;
      background: transparent;
      border: 0;
      top: 35%;
      color: #ddd;

      .ais-SearchBox-resetIcon {
        path{
          fill: #ddd;
        }
      }
    }

    .ais-SearchBox-submit {
      width: 10%;
      height: 40px;
      border: 0;
      background: #f6435d;
      transition: filter 0.2s;

      :hover {
        filter:brightness(90%)
      }

      svg {
        path {
          fill: #FFF
        }
      }
    }
  }
`;


export const URLContainer = styled.div`
  * {
    color: #333
  }

  display: flex;
  position: relative;
  padding: 20px;
  max-width: 400px;
  cursor: pointer;
  border-top: 1px solid #ddd;
  max-height: 400px;
  
  overflow: auto;

  .links {
    display: flex;
    flex-direction: column;

    .ais-Highlight {
      font-size: 16px;
    }

    a {
      color: #f6435d;
      font-size: 12px;
      font-weight: 600;
      text-decoration: none;
      margin-top: 4px;
      transition: filter 0.2s;

      :hover {
        filter: brightness(50%)
      }
    }

  }

  .clicks {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

`;
